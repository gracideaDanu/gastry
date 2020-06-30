import {
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILED
} from "../../actions/actionTypes";

const initialState = {
    list: null,
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
                list: action.orders,
                loading: false
            }
        case FETCH_ORDERS_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}