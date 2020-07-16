import * as actionTypes from '../actionTypes';
import {axiosInstance as axios} from "../../axiosInstance";
import {
    fetchUser
} from '../index'

export const login = (payload) => {
    return dispatch => {

        dispatch(loginStart());

        axios.post("/user/login", payload)
            .then(res => {
                dispatch(loginSuccess(res.data));
                dispatch(fetchUser(res.data.userId))
                dispatch(loginFlush())
            })

            .catch(err => {
                console.log(err.response.data)
                dispatch(loginFailed(err.response.data))
            })
    }
};


export const loginFlush = () => {
   return {
       type: actionTypes.LOGIN_FLUSH
   };
};

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

export const tokenInvalid = () => {
    return {
        type: actionTypes.TOKEN_INVALID
    }
};



