import {
    FETCH_SPPLIERS_LIST_START,
    FETCH_SPPLIERS_LIST_SUCCESS,
    FETCH_SPPLIERS_LIST_FAILED,
    FETCH_SPPLIERS_LIST_LENGTH_START,
    FETCH_SPPLIERS_LIST_LENGTH_SUCCESS,
    FETCH_SPPLIERS_LIST_LENGTH_FAILED,
    FLUSH_SUPPLIER,
} from "../../actionTypes";
import { axiosInstance as axios } from "../../../axiosInstance";

export const fetchSuppliersList = (payload) => async (dispatch) => {
    dispatch(fetchSuppliersListStart);

    try {
        const { category, limit, skip } = payload.data;
        const response = await axios.get(
            `/customer/suppliersList/${category}`,
            { params: { limit, skip } }
        );
        dispatch(fetchSuppliersListSuccess(response.data.data));
    } catch (err) {
        dispatch(fetchSuppliersListFailed(err));
    }
};

export const flushSuppliersList = () => {
    return dispatch => {
        dispatch(flush())
    }
};

const flush = () => {
    return {
        type: FLUSH_SUPPLIER
    }
};

const fetchSuppliersListStart = () => {
    return {
        type: FETCH_SPPLIERS_LIST_START,
        payload: {
            loading: true,
        },
    };
};

const fetchSuppliersListSuccess = (suppliersList) => {
    return {
        type: FETCH_SPPLIERS_LIST_SUCCESS,
        payload: {
            suppliersList: suppliersList,
            loading: false,
        },
    };
};

const fetchSuppliersListFailed = (error) => {
    return {
        type: FETCH_SPPLIERS_LIST_FAILED,
        error: error,
    };
};


export const fetchSuppliersListLength = (payload) => async (dispatch) => {
    dispatch(fetchSuppliersListLengthStart);

    try {
        const { category } = payload.data;
        const response = await axios.get(
            `/customer/suppliersList/${category}/size`
        );
        dispatch(fetchSuppliersListLengthSuccess(response.data.data));
    } catch (err) {
        dispatch(fetchSuppliersListLengthFailed(err));
    }
};

const fetchSuppliersListLengthStart = () => {
    return {
        type: FETCH_SPPLIERS_LIST_LENGTH_START,
        payload: {
            loading: true,
        },
    };
};

const fetchSuppliersListLengthSuccess = (suppliersListLength) => {
    return {
        type: FETCH_SPPLIERS_LIST_LENGTH_SUCCESS,
        payload: {
            suppliersListLength: suppliersListLength,
            loading: false,
        },
    };
};

const fetchSuppliersListLengthFailed = (error) => {
    return {
        type: FETCH_SPPLIERS_LIST_LENGTH_FAILED,
        error: error,
    };
};