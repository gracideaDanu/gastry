import React, { Component } from 'react'
import Login from "./login/Login";
import {Provider} from "react-redux";
import store from "../store";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from "react-bootstrap/Nav";



class App extends Component {
    render() {
        return (
                <Navbar>
                    <Nav className="justify-content-center">
                        <LinkContainer>
                            <Nav.Item href="/home">Home</Nav.Item>
                        </LinkContainer>
                        <LinkContainer>
                            <Nav.Item href="/search">Home</Nav.Item>
                        </LinkContainer>
                        <LinkContainer>
                            <Nav.Item href="/profile">Home</Nav.Item>
                        </LinkContainer>
                    </Nav>
                </Navbar>
        )
    }
}

export default App