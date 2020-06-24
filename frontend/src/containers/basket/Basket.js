import React, { Component} from 'react';
import SupplierLayout from '../common/SupplierLayout';
import UserLayout from "../common/CustomerLayout";
import * as actions from "../../redux/actions";
import {connect} from 'react-redux'
import './Basket.css'
import Container from "react-bootstrap/Container";
import {Summary} from '../../components/basket/Summary'
import EstimatedTotal from "../../components/basket/EstimatedTotal";
import CustomerLayout from "../common/CustomerLayout";
let supplierId,supplierName;
let basketArray= []
export class Basket extends Component {
    state={
        basket: []
    }
    componentDidMount() {
        const basket = this.props.location.state.basket;
        this.setState({
            ...this.state,
            basket:basket
        })
        console.log(basket)


    }
    render() {
        let total = 0
        const basketItems = this.state.basket.map(element => {
            total += (element.price * element.amount)
            console.log(element.price)
            console.log(total)
            return (
                <Summary key={element._id} item={element}></Summary>

            )
        }


        )
        return(
            <CustomerLayout title="Basket">
            <div className="purchase-card">
                <Container >
                    {basketItems}
                    <EstimatedTotal total={total}/>
                    {
                        total > 0 ? <button>Place order</button> : <p>Consider adding some items to your basket first</p>
                    }
                </Container>
            </div>
            </CustomerLayout>



        )
    }
}

export default Basket
