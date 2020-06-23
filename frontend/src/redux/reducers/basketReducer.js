import {ADD_ITEM_TO_BASKET_STATE, ADD_ITEM_TO_BASKET_FAILED} from '../actions/actionTypes';

const initialState = {
    baskets: [],
    errors: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_BASKET_STATE:
            console.log("HI")
            console.log(action.data.supplierId);

            let basketArray = [...state.baskets]
            console.log(basketArray)
            for (let basket of basketArray){console.log(basket.supplierId)}
            let basketSingle = basketArray.find(basket => basket.supplierId === action.data.supplierId)
            console.log("basket Single" + basketSingle)
            if (basketSingle) {
                let basketIndex = basketArray.findIndex(basket => basket.supplierId === basketSingle.supplierId)
                console.log("HI if")
                basketArray[basketIndex] = action.data.basket
            } else {
                console.log("HI else")
                basketArray.push(action.data.basket)
            }
            console.log(basketArray)

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
