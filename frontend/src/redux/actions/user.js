import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
} from "./actionTypes";

import { axiosInstance as axios } from "../axiosInstance";

export const fetchUser = (_id) => async (dispatch, getState) => {
    dispatch(fetchUserStart());

    try {
        const response = await axios.get("/user/" + _id,
            { headers: { Authorization: getState().auth.token } })        
        dispatch(fetchUserSuccess(response.data.data))
    } catch(err) {
        dispatch(fetchUserFailed(err))
    }  
};

const fetchUserStart = () => {
    return {
        type: FETCH_USER_START,
    };
};

const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        user: user,
        loading: false
    };
};

const fetchUserFailed = (error) => {
    return {
        type: FETCH_USER_FAILED,
        error: error,
    };
};
