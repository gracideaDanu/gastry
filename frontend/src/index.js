import React from 'react'
import ReactDOM from 'react-dom'
import Routes from "./Routes";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>, document.querySelector('#root'))

