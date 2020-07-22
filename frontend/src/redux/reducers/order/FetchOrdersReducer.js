import {
    FETCH_NOTIFICATION_START,
    FETCH_NOTIFICATION_SUCCESS,
    FETCH_NOTIFICATION_FAILED,
    MODIFY_ORDER_START,
    MODIFY_ORDER_SUCCESS,
    MODIFY_ORDER_FAILED,
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILED, ORDERS_FLUSH
} from "../../actions/actionTypes";

const initialState = {
    orders: [],
    error: null,
    loading: false,
};

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            }
        case FETCH_ORDERS_FAILED:
            return {
                ...state,
                error: action.error
            }
        case MODIFY_ORDER_START:
            return {
                ...state,
                loading: true
            }
        case MODIFY_ORDER_SUCCESS:
            let orderArray = [...state.orders]
            for (let i = 0; i < orderArray.length; i++) {
                const order = {
                    ...orderArray[i]
                };
                if (action.data.orderId === order._id) {
                    order.status = action.status
                    orderArray[i] = order
                }
            }
            return {
                ...state,
                orders: orderArray,
                loading: false
            }
        case MODIFY_ORDER_FAILED:
            return {
                ...state,
                loading: false
            }
        case FETCH_NOTIFICATION_START:
            return {
                ...state,
                loading: true,
            }
        case FETCH_NOTIFICATION_SUCCESS:
            let orderArray2 = [...state.orders]
            for (let i = 0; i < orderArray2.length; i++) {
                const order = {
                    ...orderArray2[i]
                };
                if (action.data.orderId === order._id) {
                    order.newMessages = action.data
                    orderArray2[i] = order
                }
            }
            return {
                ...state,
                orders: orderArray2,
                loading: false,
            }
        case FETCH_NOTIFICATION_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case ORDERS_FLUSH:
            return initialState;
        default:
            return state;
    }
}
