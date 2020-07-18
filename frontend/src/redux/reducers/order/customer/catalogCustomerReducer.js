import {
    FETCH_SUPPLIER_CATALOG_START,
    FETCH_SUPPLIER_CATALOG_SUCCESS,
    FETCH_SUPPLIER_CATALOG_FAILED, FLUSH_SUPPLIER_CATALOG,
} from "../../../actions/actionTypes";

const initialState = {
    catalog: null,
    error: null,
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SUPPLIER_CATALOG_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SUPPLIER_CATALOG_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case FETCH_SUPPLIER_CATALOG_SUCCESS:
            return {
                ...state,
                catalog: action.payload.catalog,
                loading: false,
            };
        case FLUSH_SUPPLIER_CATALOG:
            return initialState;
        default:
            return state;
    }
}
