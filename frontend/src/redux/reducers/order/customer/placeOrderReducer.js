import {
    PLACE_ORDER_START,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAILED,
} from "../../../actions/actionTypes";

const initialState = {
    error: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PLACE_ORDER_START:
            return {
                ...state,
                loading: true,
            };
        case PLACE_ORDER_FAILED:
            return {
                ...state,
                error: action.data,
                loading: false,
            };
        case PLACE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
