import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
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
                user: action.user,
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
                user: action.user,
                loading: false,
            };
        default:
            return state;
    }
}
