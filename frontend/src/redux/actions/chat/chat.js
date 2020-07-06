import {
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILED,
} from "../actionTypes";
import { axiosInstance as axios } from "../../axiosInstance";

export const fetchChat = (payload) => async (dispatch) => {
    dispatch(fetchChatStart);

    const token = payload.token;
    console.log(token);
    const config = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.get("/user/order/",config);
        dispatch(fetchChatSuccess(response.data.data));
    } catch (err) {
        dispatch(fetchChatFailed(err));
    }
};

const fetchChatStart = () => {
    return {
        type: FETCH_ORDERS_START,
        payload: {
            loading: true,
        },
    };
};

const fetchChatSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

const fetchChatFailed = (error) => {
    return {
        type: FETCH_ORDERS_FAILED,
        error: error,
    };
};
