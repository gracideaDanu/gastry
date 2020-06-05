import * as actionTypes from './actionTypes';
import axiosInstance from "../axiosInstance";

export const login =(payload) =>{
return dispatch => {

    dispatch(loginStart());

    axiosInstance.post("/user/login", payload)
        .then(res => {
            dispatch(loginSuccess(res.data))
        })

        .catch(err => {
            dispatch(loginFailed(err.data))
        })
}
}

;

 const loginSuccess =(data) =>{
    return{
        type: actionTypes.LOGIN_SUCCESS,
        logindata: data
    };
};

 const loginStart =() =>{
    return{
        type: actionTypes.LOGIN_START
    };
};

 const loginFailed =(error) =>{
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



