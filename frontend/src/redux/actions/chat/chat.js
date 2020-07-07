import {
    FETCH_CHAT_START,
    FETCH_CHAT_SUCCESS,
    FETCH_CHAT_FAILED,
    POST_MESSAGE_START,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAILED
} from "../actionTypes";
import { axiosInstance as axios } from "../../axiosInstance";

export const fetchChat = (payload) => {


    return dispatch => {
        dispatch(fetchChatStart);
        const token = payload.token;
        console.log(token);
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        };


        const response = axios.get(`chat/fetch/${payload.chatId}`, config)
            .then(res => {
                console.log("Successfully fetched")
                console.log(response.data.message)
                dispatch(fetchChatSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err.data)
                console.log("failed fetching")
                dispatch(fetchChatFailed(err));
            })


    }
};
export const postMessage = (payload) => async (dispatch) => {
    dispatch(postMessageStart);

    const token = payload.token;
    console.log(token);
    const config = {
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    };
    console.log(payload.chatId)

    try {
        const response = await axios.post(`chat/${payload.chatId}`, payload.data,config);
        dispatch(postMessageSuccess(response.data.messages));
    } catch (err) {
        dispatch(postMessageFailed(err));
    }
};

const postMessageStart = () => {
    return {
        type: POST_MESSAGE_START,
    };
};

const postMessageSuccess = (messages) => {
    return {
        type: POST_MESSAGE_SUCCESS,
        messages: messages
    };
};

const postMessageFailed = (error) => {
    return {
        type: POST_MESSAGE_FAILED,
        error: error,
    };
};


const fetchChatStart = () => {
    return {
        type: FETCH_CHAT_START,
    };
};

const fetchChatSuccess = (message) => {
    return {
        type: FETCH_CHAT_SUCCESS,
        message: message
    };
};

const fetchChatFailed = (error) => {
    return {
        type: FETCH_CHAT_FAILED,
        error: error,
    };
};
