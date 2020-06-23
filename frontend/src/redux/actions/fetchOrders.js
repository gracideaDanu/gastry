import {
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILED,
} from "./actionTypes";
import { axiosInstance as axios } from "../axiosInstance";

export const fetchOrders = () => async (dispatch) => {
    dispatch(fetchOrdersStart);

    try {
        const response = await axios.get("/customer/orders");
        dispatch(fetchOrdersSuccess(response.data.data));
    } catch (err) {
        dispatch(fetchOrdersFailed(err));
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

const fetchOrdersSuccess = (suppliersList) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        payload: {
            suppliersList: suppliersList,
            loading: false,
        },
    };
};

const fetchOrdersFailed = (error) => {
    return {
        type: FETCH_ORDERS_FAILED,
        error: error,
    };
};
