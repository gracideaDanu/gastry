import { LOGIN_SUCCESS,LOGIN_FAILED,TOKEN_INVALID } from '../actions/actionTypes';

const initialState = {
    token: null,
    loaded: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
               ...state,
                token: action.logindata.token
            };
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.error
            };
        case TOKEN_INVALID:
            return {
                //stuff
            }
        default:
            return state;
    }
}