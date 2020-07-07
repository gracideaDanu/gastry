import {FETCH_CHAT_START,FETCH_CHAT_SUCCESS,FETCH_CHAT_FAILED,POST_MESSAGE_START,POST_MESSAGE_SUCCESS,POST_MESSAGE_FAILED} from '../../actions/actionTypes';

const initialState = {
    messages: [],
    data: null,
    loading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_CHAT_START:
            return {
                ...state,
                loading: true
            }


        case FETCH_CHAT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.messages
            };

        case FETCH_CHAT_FAILED:
            return {
                ...state,
                loading: false,
                errors: "failed"
            };
        case POST_MESSAGE_START:
            return {
                ...state,
                loading: true
            };
        case POST_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case POST_MESSAGE_FAILED:
            return {
                ...state,
                loading: false,
                errors: action.data.error
            };

        default:
            return state;
    }
}
