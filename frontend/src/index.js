import React from 'react'
import ReactDOM from 'react-dom'
import Routes from "./Routes";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import './customs.scss';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Container className="justify-content-center" id={"rootcontainer"}>
                        <Routes class="routes"/>
                </Container>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>, document.querySelector('#root'))

