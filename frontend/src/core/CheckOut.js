import React, { useState, useEffect} from 'react';
import { getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { emptyCart } from './cartHelper';
import {isAuthenticated } from '../auth/index';
import { Link } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';



const CheckOut = ({ products, setRun = f => f, run = undefined }) => {

    const [ data, setData ] = useState({
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    })

    const userId = isAuthenticated() && isAuthenticated().user._id;

    const token = isAuthenticated() && isAuthenticated().token;

    const getToken = (userId, token) => {
        getBraintreeClientToken(userId, token)
            .then(data => {
                if(data.error) {
                    console.log(data.error)
                    setData({ ...data, error: data.error})

            } else {
                // console.log(data)
                setData({ clientToken: data.clientToken})
            }
        })
    }

    useEffect(() => {
        getToken(userId, token)
    }, [])

    const handleAddress = event => {
        setData({ ...data, address: event.target.value})
    }

    const getTotal =  () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0)
    }

    const showCheckout = () => {

        return  isAuthenticated() ? (
            <div>{showDropIn()}</div>
        ) : (
        <Link to='/login'>
          <button className='btn btn-primary'>Sign in to Checkout</button>  
        </Link>
        )
    }

    let deliveryAddress = data.address;

    const buyNow = () => {
        //send the nonce to your server
        //nonce = data.instance.requestPaymentMethod()
        setData({ loading: true});
        let nonce;

        let getNonce = data.instance.requestPaymentMethod()
            .then(data => {
                console.log(data)
                nonce = data.nonce;

                // console.log('Send nonce and total to process: ', nonce, getTotal(products))

                const paymentData = {
                    paymentMethodNonce: nonce,
                    amount: getTotal(products)
                }
                processPayment(userId, token, paymentData)
                    .then(response => {
                        console.log('Order Info', response)
                        //empty cart
                        //create order
                        
                        const createOrderData = {
                            products: products,
                            transaction_id: response.transaction.id,
                            amount: response.transaction.amount,
                            address: deliveryAddress
                        }

                        createOrder(userId, token, createOrderData)

                        setData({ ...data, success: response.success })
                        emptyCart(() => {
                            setRun(!run);
                            console.log('Payment success and empty cart')
                            setData({
                                loading: false,
                                success: true
                            })
                        })
                        
                    })
                    .catch(error => {
                        setData({ loading: false })
                        console.log(error)
                    })
            }) 
            .catch(error => {
                // console.log(error)
                setData({ ...data, error: error.message })
            })

    }

    const showSuccess = success => (
        <div
            className='alert alert-info'
            style={{ display: success ? '' : 'none'}}
        >
        
            <h2> Thanks! Your payment was successful</h2>
        
        </div>
    )

    const showError = error => (
        <div
            className='alert alert-danger'
            style={{ display: error ? '' : 'none'}}
        >
        
            <h2> {error}</h2>
        
        </div>
    )

    const showDropIn = () => (
        <div>
            {data.clientToken !== null && products.length > 0 ? (
                <div>
                        <div className='gorm-group mb-3'>
                            <label className='text-muted' >Delivery Address: </label>
                            <textarea 
                                onChange={handleAddress}
                                className='form-control'
                                value={data.address}
                                placeholder='Type your delivery address here....'
                            />
                    
                    </div>
                        <DropIn 
                            options={{
                                authorization: data.clientToken,
                                paypal: {
                                    flow: 'vault'
                                }
                        }} 
                            onInstance={instance => (data.instance = instance)}/>
                        <button 
                            onClick={buyNow}
                            className='btn btn-success btn-block'
                            
                            >Pay Now</button>
                </div>
            ) : null }
        </div>
    );

    return <div> 
    
            <h2> Total: ${getTotal()} </h2>

            {showError(data.error)}

            {showSuccess(data.success)}

            {showCheckout()}
        </div>
}


export default CheckOut;