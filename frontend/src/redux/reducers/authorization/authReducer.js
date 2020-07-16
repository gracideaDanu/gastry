import {LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_START, LOGIN_FLUSH} from '../../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true

            };

        case LOGIN_SUCCESS:
            return {
               ...state,
                token: action.logindata.token,
                userId: action.logindata.userId,
                loading: false
            };
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.error.message
            };
        case LOGIN_FLUSH:
            return {
                ...state,
                error: null
            };
            break;
        default:
            return state;
    }
}
