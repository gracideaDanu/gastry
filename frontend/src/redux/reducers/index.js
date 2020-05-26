import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import {LOGOUT} from "../actions/actionTypes";
import registerReducer from "./registerReducer";

const  appReducer =combineReducers({
    auth: authReducer,
    reg: registerReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
}
export default rootReducer;
