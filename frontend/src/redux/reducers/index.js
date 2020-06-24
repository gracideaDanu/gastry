import { combineReducers } from 'redux';
import authReducer from "./authorization/authReducer";
import {LOGOUT} from "../actions/actionTypes";
import registerReducer from "./authorization/registerReducer";
import userReducer from "./userReducer";
import catalogReducer from "./order/supplier/catalogReducer";
import suppliersListReducer from "./order/customer/suppliersListReducer"
import catalogCustomerReducer from "./order/customer/catalogCustomerReducer"
import basketReducer from "./order/customer/basketReducer";

const  appReducer =combineReducers({
    auth: authReducer,
    reg: registerReducer,
    user: userReducer,
    cat: catalogReducer,
    suppliersList: suppliersListReducer,
    customerCatalog: catalogCustomerReducer,
    basket: basketReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
}
export default rootReducer;
