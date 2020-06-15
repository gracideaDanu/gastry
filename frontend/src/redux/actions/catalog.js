import * as actionTypes from './actionTypes';
import axiosInstance from "../axiosInstance";



const createCatalogSuccess =(data) =>{
    return{
        type: actionTypes.CREATE_CATALOG_SUCCESS,
        data: data
    };
};

 const createCatalogStart =() =>{
    return{
        type: actionTypes.CREATE_CATALOG_START
    };
};

 const createCatalogFailed =(error) =>{
    return{
        type: actionTypes.CREATE_CATALOG_FAILED,
        error: error
    };
};


export const createCatalog = (payload) => {
    return dispatch => {
        dispatch(createCatalogStart());

        // TODO: use axios instance to make POST request to backend with token and add to header
        //axios.post( ... )
        try {
            dispatch(createCatalogSuccess({
                message: "Catalog successfully created"
            }))

        } catch (e) {
            dispatch(createCatalogFailed(e.data))
        }

    }
};

const fetchCatalogSuccess =(data) =>{
    return{
        type: actionTypes.FETCH_CATALOG_SUCCESS,
        data: data
    };
};

const fetchCatalogStart =() =>{
    return{
        type: actionTypes.FETCH_CATALOG_START
    };
};

const fetchCatalogFailed =(error) =>{
    return{
        type: actionTypes.FETCH_CATALOG_FAILED,
        error: error
    };
};


export const fetchCatalog = (payload) => {
    return dispatch => {
        dispatch(fetchCatalogStart());

        // TODO: use axios instance to make GET request to backend with token and add to header
        //axios.get( ... )
        try {
            dispatch(fetchCatalogSuccess({
                message: "Catalog successfully created",
                items: [
                    {
                        catg: 'drink',
                        name: 'Item 1',
                        price: 30,
                        description:"some description"
                    },
                    {
                        catg: 'food',
                        name: 'Item 2',
                        price: 30,
                        description:"some description"

                    }
                ]
            }))

        } catch (e) {
            dispatch(fetchCatalogFailed(e.data))
        }

    }
};

const addItemCatalogSuccess =(data) =>{
    return{
        type: actionTypes.ADD_ITEM_CATALOG_SUCCESS,
        data: data
    };
};

const addItemCatalogStart =() =>{
    return{
        type: actionTypes.ADD_ITEM_CATALOG_START
    };
};

const addItemCatalogFailed =(error) =>{
    return{
        type: actionTypes.ADD_ITEM_CATALOG_FAILED,
        error: error
    };
};


export const addItemCatalog = (payload) => {
    return dispatch => {
        dispatch(addItemCatalogStart());

        // TODO: use axios instance to make PUT request to backend with token and add to header
        //axios.put( ... )
        try {
            dispatch(addItemCatalogSuccess({
                message: "Item successfully added"
            }))

        } catch (e) {
            dispatch(addItemCatalogFailed({
                message: 'Sorry add item failed'
            }))
        }

    }
};

const deleteItemCatalogSuccess =(data) =>{
    return{
        type: actionTypes.DELETE_ITEM_CATALOG_SUCCESS,
        data: data
    };
};

const deleteItemCatalogStart =() =>{
    return{
        type: actionTypes.DELETE_ITEM_CATALOG_START
    };
};

const deleteItemCatalogFailed =(error) =>{
    return{
        type: actionTypes.DELETE_ITEM_CATALOG_FAILED,
        error: error
    };
};


export const deleteItemCatalog = (payload) => {
    return dispatch => {
        dispatch(deleteItemCatalogStart());

        // TODO: use axios instance to make PUT request to backend with token and add to header
        //axios.put( ... )
        try {
            dispatch(deleteItemCatalogSuccess({
                message: "Item successfully added"
            }))

        } catch (e) {
            dispatch(deleteItemCatalogFailed({
                message: 'Sorry delete item failed'
            }))
        }

    }
};

const modifyItemCatalogSuccess =(data) =>{
    return{
        type: actionTypes.MODIFY_ITEM_CATALOG_SUCCESS,
        data: data
    };
};

const modifyItemCatalogStart =() =>{
    return{
        type: actionTypes.MODIFY_ITEM_CATALOG_START
    };
};

const modifyItemCatalogFailed =(error) =>{
    return{
        type: actionTypes.MODIFY_ITEM_CATALOG_FAILED,
        error: error
    };
};


export const modifyItemCatalog = (payload) => {
    return dispatch => {
        dispatch(modifyItemCatalogStart());
        const token = payload.token;
        const config = {
            headers: {
               Authentication: token,
               'Content-Type': 'application/json'
            }
        };
        const body = payload.data;

        axiosInstance.put('supplier/modifyItem', body, config)
            .then(res => {
                //res.data has id value of changed item and message
                dispatch(modifyItemCatalogSuccess(res.data))
                dispatch(fetchCatalog(payload))
            })
            .catch(err => {
                //err.data has property message
                dispatch(modifyItemCatalogFailed(err.data))
            })


    }
};


