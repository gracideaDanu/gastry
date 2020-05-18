import { LOGIN_SUCCESS,LOGIN_FAILED } from '../actions/actionTypes';

const initialState = {
    loaded: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
            };
        case LOGIN_FAILED:
            return {
            };
        default:
            return state;
    }
}