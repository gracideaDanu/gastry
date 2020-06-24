import {ADD_ITEM_TO_BASKET_STATE, ADD_ITEM_TO_BASKET_FAILED} from '../../../actions/actionTypes';

const initialState = {
    baskets: [],
    errors: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET_STATE:

            let basketArray = state.baskets.slice();
            for (let basket of basketArray){console.log(basket.supplierId)}
            let basketSingle = basketArray.find(basket => basket.supplierId === action.data.supplierId)
            if (basketSingle) {
                let basketIndex = basketArray.findIndex(basket => basket.supplierId === basketSingle.supplierId)
                basketArray[basketIndex] = action.data.basket
            } else {
                basketArray.push(action.data.basket)
            }

            return {
                ...state,
                baskets: basketArray

            };

        case ADD_ITEM_TO_BASKET_FAILED:
            return {
                ...state,
                errors: action.data.error
            };

                default:
                return state;
            }
    }
