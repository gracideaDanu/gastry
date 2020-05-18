import React, { Component } from 'react'
import Login from "./login/Login";
import {Provider} from "react-redux";
import store from "../store";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from 'react-router-bootstrap';
import NavItem from 'react-bootstrap/lib/NavItem';



class App extends Component {
    render() {
        return (
                <Navbar>
                    <Nav className="justify-content-center">
                        <LinkContainer>
                            <NavItem href="/home">Home</NavItem>
                        </LinkContainer>
                        <LinkContainer>
                            <NavItem href="/search">Home</NavItem>
                        </LinkContainer>
                        <LinkContainer>
                            <NavItem href="/profile">Home</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
        )
    }
}

export default App