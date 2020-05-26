import * as actionTypes from './actionTypes';
import axiosInstance from "../axiosInstance";
import {LOGOUT} from "./actionTypes";

export const logout = () =>{
        return dispatch => {
            dispatch({ type: LOGOUT });
        }
};

