import * as actionTypes from './actionTypes';
import {axiosInstance as axios} from "../axiosInstance";

export const login = (payload) => {
    return dispatch => {

        dispatch(loginStart());

        axios.post("/user/login", payload)
            .then(res => {
                dispatch(loginSuccess(res.data))
            })

            .catch(err => {
                dispatch(loginFailed(err.data))
            })
    }
};

export const loginSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        logindata: data
    };
};

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

export const loginFailed = (error) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        error: error
    };
};

export const tokenInvalid = () => {
    return {
        type: actionTypes.TOKEN_INVALID
    }
}
