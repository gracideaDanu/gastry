import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import {LOGOUT} from "../actions/actionTypes";
import registerReducer from "./registerReducer";
import userReducer from "./userReducer";
import catalogReducer from "./catalogReducer";
import suppliersListReducer from "./suppliersListReducer"
import catalogCustomerReducer from "./catalogCustomerReducer"

const  appReducer =combineReducers({
    auth: authReducer,
    reg: registerReducer,
    user: userReducer,
    cat: catalogReducer,
    suppliersList: suppliersListReducer,
    customerCatalog: catalogCustomerReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
}
export default rootReducer;
