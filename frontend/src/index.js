import React from 'react'
import ReactDOM from 'react-dom'
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes class="routes"/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>, document.querySelector('#root'))