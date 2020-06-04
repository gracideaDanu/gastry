import {REGISTER_START,REGISTER_FAILED,REGISTER_SUCCESS} from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                loading: true

            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case REGISTER_FAILED:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}

