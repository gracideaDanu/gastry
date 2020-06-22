import {
    FETCH_SPPLIERS_LIST_START,
    FETCH_SPPLIERS_LIST_SUCCESS,
    FETCH_SPPLIERS_LIST_FAILED,
} from "../actions/actionTypes";

const initialState = {
    list: null,
    error: null,
    loading: false,
};

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_SPPLIERS_LIST_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_SPPLIERS_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload.suppliersList,
                loading: false
            }
        case FETCH_SPPLIERS_LIST_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}