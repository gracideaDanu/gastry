import * as actionTypes from "../../actionTypes";

//used in component, supplier specific component


const addItemToBasketState =(data) =>{
    return{
        data: data,
        type: actionTypes.ADD_ITEM_TO_BASKET_STATE
    };
};

const addItemToBasketFailed =(error) =>{
    return{
        type: actionTypes.ADD_ITEM_TO_BASKET_FAILED,
        error: error
    };
};

export const addItemToBasket = (payload) => {
    return dispatch => {

            console.log("HIIIII")


            const supplierId = payload.supplierId;
            const basket = {
                basketItems: payload.basket,
                supplierId: supplierId
            }
            console.log(supplierId)
            console.log(basket)
            dispatch(addItemToBasketState({
                supplierId: supplierId,
                basket: basket
            }))


    }

}