import { API_AUTH } from '../config';
import queryString from 'query-string';

export const getProducts = (sortBy) => {
    return fetch(`${API_AUTH}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}


export const getCategories = () => {
    return fetch(`${API_AUTH}/categories` , {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err.messae))
}
//   products/by/search
export const getFilteredProducts = (skip, limit, filters = {}) => {

    const data = {
        limit, skip, filters
    }

    // console.log(name, email, password);
    return fetch(`${API_AUTH}/products/by/search`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}

export const list = params => {
    const query = queryString.stringify(params);

    console.log(query, 'query');
    return fetch(`${API_AUTH}/products/search?${query}`, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const read = (productId) => {
    return fetch(`${API_AUTH}/product/${productId}` , {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const listRelated = productId => {
    return fetch(`${API_AUTH}/products/related/${productId}` , {
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getBraintreeClientToken = (userId, token) => {
    return fetch(`${API_AUTH}/braintree/getToken/${userId}` , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const processPayment = (userId, token, paymentData) => {
    return fetch(`${API_AUTH}/braintree/payment/${userId}` , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const createOrder = (userId, token, createOrdertData) => {
    return fetch(`${API_AUTH}/order/create/${userId}` , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify( {order: createOrdertData} )
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

