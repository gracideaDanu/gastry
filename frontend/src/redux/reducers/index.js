import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import {LOGOUT} from "../actions/actionTypes";

const  appReducer =combineReducers({
    auth: authReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
}
export default rootReducer;