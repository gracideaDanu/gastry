import React from 'react'
import ReactDOM from 'react-dom'
import Routes from "./Routes";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react'
import Container from "react-bootstrap/Container";
import './customs.scss';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Container className="justify-content-center" id={"rootcontainer"}>
                        <Routes class="routes"/>
                    </Container>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>, document.querySelector('#root'))

