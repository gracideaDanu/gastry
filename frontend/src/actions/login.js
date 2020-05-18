import * as actionTypes from './actionTypes';

export const loginSuccess =() =>{
    return{
        type: actionTypes.LOGIN_SUCCESS
    };
};

export const loginFailed =() =>{
    return{
        type: actionTypes.LOGIN_FAILED
    };
};