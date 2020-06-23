import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED, CHECK_TOKEN_VALIDITY_START,
    CHECK_TOKEN_VALIDITY_FAILED,
    CHECK_TOKEN_VALIDITY_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    user: null,
    error: null,
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USER_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                loading: false,
            };
        case UPDATE_USER_START:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_USER_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                loading: false,
            };
        case CHECK_TOKEN_VALIDITY_START:
            return {
                ...state,
                loading: true
            };case CHECK_TOKEN_VALIDITY_SUCCESS:
            return {
                ...state,
                loading: false
            };case CHECK_TOKEN_VALIDITY_FAILED:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}
