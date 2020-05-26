import {LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_START} from '../actions/actionTypes';

const initialState = {
    token: null,
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
                loading: false
            };
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}
