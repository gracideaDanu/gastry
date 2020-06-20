import * as actionTypes from './actionTypes';
import axiosInstance from "../axiosInstance";


export const fetchSupplier = (payload) => {
    return dispatch => {
        dispatch(fetchSupplierStart());
        console.log(payload);

        const token = payload.token;
        console.log(token);
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: payload.data
        };

        axiosInstance.get("/supplier/",config)
            .then(res => {
                dispatch(fetchSupplierSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchSupplierFailed(err.data))
            })


    }
};


const fetchSupplierSuccess =(data) =>{
    return{
        type: actionTypes.FETCH_SUPPLIER_SUCCESS,
        data: data
    };
};

const fetchSupplierStart =() =>{
    return{
        type: actionTypes.FETCH_SUPPLIER_START
    };
};

const fetchSupplierFailed =(error) =>{
    return{
        type: actionTypes.FETCH_SUPPLIER_FAILED,
        error: error
    };
};

