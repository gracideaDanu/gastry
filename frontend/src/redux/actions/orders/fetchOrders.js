import {
    MODIFY_ORDER_START,
    MODIFY_ORDER_SUCCESS,
    MODIFY_ORDER_FAILED,
    FETCH_NOTIFICATION_START,
    FETCH_NOTIFICATION_SUCCESS,
    FETCH_NOTIFICATION_FAILED,
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILED,
    ORDERS_FLUSH,
} from "../actionTypes";
import { axiosInstance as axios } from "../../axiosInstance";

export const fetchOrders = (payload) => async (dispatch) => {
    dispatch(fetchOrdersStart);

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
        dispatch(fetchOrdersSuccess(response.data.data));
    } catch (err) {
        dispatch(fetchOrdersFailed(err));
    }
};

export const fetchNotifications = (payload) => async (dispatch) => {
    dispatch(fetchNotificationsStart);

    const token = payload.token;
    const config = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.get(`/chat/fetch/notifications/${payload.chatId}`,config);
        dispatch(fetchNotificationsSuccess(response.data,payload.chatId));
    } catch (err) {
        dispatch(fetchNotificationsFailed(err));
    }
};


export const modifyOrders = (payload) => async (dispatch) => {
    dispatch(modifyOrdersStart);

    const token = payload.token;
    console.log(token);
    const config = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.patch(`/supplier/order/${payload.orderId}`,payload.data,config);
        dispatch(modifyOrdersSuccess(response.data,payload.data.status));
    } catch (err) {
        dispatch(modifyOrdersFailed(err));
    }
};


export const flushOrders = () => {
    return dispatch => {
        dispatch(flush())
    }
};

const flush = () => {
    return {
        type: ORDERS_FLUSH
    }
};

const fetchOrdersStart = () => {
    return {
        type: FETCH_ORDERS_START,
        payload: {
            loading: true,
        },
    };
};

const fetchOrdersSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

const fetchOrdersFailed = (error) => {
    return {
        type: FETCH_ORDERS_FAILED,
        error: error,
    };
};


const modifyOrdersStart = () => {
    return {
        type: MODIFY_ORDER_START,
        payload: {
            loading: true,
        },
    };
};

const modifyOrdersSuccess = (data,status) => {
    return {
        type: MODIFY_ORDER_SUCCESS,
        data:data,
        status: status
    };
};

const modifyOrdersFailed = (error) => {
    return {
        type: MODIFY_ORDER_FAILED,
        error: error,
    };
};


const fetchNotificationsStart = () => {
    return {
        type: FETCH_NOTIFICATION_START,
        payload: {
            loading: true,
        },
    };
};

const fetchNotificationsSuccess = (data,id) => {
    return {
        type: FETCH_NOTIFICATION_SUCCESS,
        data: data,
        orderId: id
    };
};

const fetchNotificationsFailed = (error) => {
    return {
        type: FETCH_NOTIFICATION_FAILED,
        error: error
    };
};