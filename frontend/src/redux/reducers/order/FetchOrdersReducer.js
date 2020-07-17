import {
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
            };
        case ORDERS_FLUSH:
            return initialState;
        default:
            return state;
    }
}
