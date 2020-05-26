import * as actionTypes from './actionTypes';
import axiosInstance from "../axiosInstance";

export const login =(payload) =>{
return dispatch => {
    axiosInstance.post("/customer/login", payload)
        .then(res => {
            dispatch(loginSuccess(res.data))
        })

        .catch(err => {
            dispatch(loginFailed(err.data))
        })
}
}

;export const loginSuccess =(data) =>{
    return{
        type: actionTypes.LOGIN_SUCCESS,
        logindata: data
    };
};

export const loginFailed =(error) =>{
    return{
        type: actionTypes.LOGIN_FAILED,
        error: error
    };
};

export const tokenInvalid =() =>{
    return{
        type: actionTypes.TOKEN_INVALID
    }
}
