import * as actionTypes from '../actionTypes';
import axiosInstance from "../../axiosInstance";

export const register =(payload) =>{
        return dispatch => {
            dispatch(registerStart());
            axiosInstance.post("/"+ payload.option + "/register", payload)
                .then(res => {
                    dispatch(registerSuccess());
                    dispatch(loginStart());
                    axiosInstance.post("/" + payload.option + "/login", payload)
                        .then(res => {
                            dispatch(loginSuccess(res.data))
                        })
                        .catch(res => {
                            dispatch(loginFailed())
                        })
                })

                .catch(err => {
                    dispatch(registerFailed(err.data))
                })
        }
    }

;

export const registerSuccess =(data) =>{
    return{
        type: actionTypes.REGISTER_SUCCESS
    };
};

export const registerStart =() =>{
    return{
        type: actionTypes.REGISTER_START
    };
};

export const registerFailed =(error) =>{
    return{
        type: actionTypes.REGISTER_FAILED,
        error: error
    };
};

export const loginSuccess =(data) =>{
    return{
        type: actionTypes.LOGIN_SUCCESS,
        logindata: data
    };
};

export const loginStart =() =>{
    return{
        type: actionTypes.LOGIN_START
    };
};

export const loginFailed =(error) =>{
    return{
        type: actionTypes.LOGIN_FAILED,
        error: error
    };
};

