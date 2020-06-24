import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
    CHECK_TOKEN_VALIDITY_START,
    CHECK_TOKEN_VALIDITY_SUCCESS,
    CHECK_TOKEN_VALIDITY_FAILED,
    LOGOUT
} from "./actionTypes";

import { axiosInstance as axios } from "../axiosInstance";
import {logout} from "./authorization/logout";

export const fetchUser = (_id) => async (dispatch, getState) => {
    dispatch(fetchUserStart());

    try {
        const response = await axios.get("/user/" + _id, {
            headers: { Authorization: getState().auth.token },
        });
        dispatch(fetchUserSuccess(response.data.data));
    } catch (err) {
        dispatch(fetchUserFailed(err));
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
        payload: {
            user: user,
            loading: false
        }
    };
};

const fetchUserFailed = (error) => {
    return {
        type: FETCH_USER_FAILED,
        error: error,
    };
};

export const updateUser = (_id, formValues) => async (dispatch, getState) => {
    dispatch(updateUserStart());

    try {
        const response = await axios.patch("/user/" + _id, formValues, {
            headers: { Authorization: getState().auth.token },
        });

        dispatch(updateUserSuccess(response.data._id));
    } catch (err) {
        dispatch(updateUserFailed(err));
    }
};

const updateUserStart = () => {
    return {
        type: UPDATE_USER_START,
    };
};

const updateUserSuccess = (user) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: {
            user: user,
            loading: false,
        }
    };
};

const updateUserFailed = (error) => {
    return {
        type: UPDATE_USER_FAILED,
        error: error,
    };
};

const checkTokenValidityStart = () => {
    return {
        type: CHECK_TOKEN_VALIDITY_START
    }
};const checkTokenValiditySuccess = () => {
    return {
        type: CHECK_TOKEN_VALIDITY_SUCCESS
    }
};const checkTokenValidityFailed = () => {
    return {
        type: CHECK_TOKEN_VALIDITY_FAILED
    }
};

export const checkTokenValidity = (payload) => {
    return dispatch => {
        dispatch(checkTokenValidityStart());
        const token = payload.token;
        console.log(token);
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        };
        axios.get('user/checkToken', config)
            .then(res=> {
                dispatch(checkTokenValiditySuccess())
            })
            .catch(error=> {
                dispatch(checkTokenValidityFailed())
                dispatch({type: LOGOUT})
            })

    }
};
