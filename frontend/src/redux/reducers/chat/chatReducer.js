import {} from '../../actions/actionTypes';

const initialState = {
    messages: [],
    loading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET_STATE:

        case ADD_ITEM_TO_BASKET_FAILED:
            return {
                ...state,
                errors: action.data.error
            };

        default:
            return state;
    }
}
