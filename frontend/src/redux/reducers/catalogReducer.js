import {
    CREATE_CATALOG_START, CREATE_CATALOG_SUCCESS, CREATE_CATALOG_FAILED,
    FETCH_CATALOG_START, FETCH_CATALOG_SUCCESS, FETCH_CATALOG_FAILED,
    ADD_ITEM_CATALOG_START, ADD_ITEM_CATALOG_SUCCESS, ADD_ITEM_CATALOG_FAILED,
    DELETE_ITEM_CATALOG_START, DELETE_ITEM_CATALOG_SUCCESS, DELETE_ITEM_CATALOG_FAILED
} from "../actions/actionTypes";


const initialState = {
    items: [],
    loading: false,
    error: null,
    data: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_CATALOG_START:
            return {
                ...state,
                loading: true

            };
        case CREATE_CATALOG_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case CREATE_CATALOG_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case FETCH_CATALOG_START:
            return {
                ...state,
                loading: true

            };
        case FETCH_CATALOG_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case FETCH_CATALOG_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.data.items,
                data: action.data.message
            }
        case ADD_ITEM_CATALOG_START:
            return {
                ...state,
                loading: true

            };
        case ADD_ITEM_CATALOG_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case ADD_ITEM_CATALOG_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data.message
            };
        case DELETE_ITEM_CATALOG_START:
            return {
                ...state,
                loading: true

            };
        case DELETE_ITEM_CATALOG_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case DELETE_ITEM_CATALOG_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data.message
            };
        default:
            return state;
    }
}
