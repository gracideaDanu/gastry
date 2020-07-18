import {
    FETCH_SPPLIERS_LIST_START,
    FETCH_SPPLIERS_LIST_SUCCESS,
    FETCH_SPPLIERS_LIST_FAILED,
    FETCH_SPPLIERS_LIST_LENGTH_START,
    FETCH_SPPLIERS_LIST_LENGTH_SUCCESS,
    FETCH_SPPLIERS_LIST_LENGTH_FAILED,
} from "../../../actions/actionTypes";

const initialState = {
    list: null,
    listLength: 0,
    error: null,
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SPPLIERS_LIST_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SPPLIERS_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload.suppliersList,
                loading: false,
            };
        case FETCH_SPPLIERS_LIST_FAILED:
            return {
                ...state,
                error: action.error,
            };
        case FETCH_SPPLIERS_LIST_LENGTH_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SPPLIERS_LIST_LENGTH_SUCCESS:
            return {
                ...state,
                listLength: action.payload.suppliersListLength,
                loading: false,
            };
        case FETCH_SPPLIERS_LIST_LENGTH_FAILED:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}
