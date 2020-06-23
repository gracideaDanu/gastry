import React, {Component} from 'react'
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap';
import Nav from "react-bootstrap/Nav";
import "./nav.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


const Topbar = (props) => {

    return (
        <Navbar>
            <Nav className="fixed-top ">
                <Container className={"justify-content-start"}>
                    <Button variant="dark" className={""} onClick={props.onClick}>Log out</Button>
                </Container>
                <Container className={"justify-content-end"}>
                    <Button className={""} variant="dark">Basket</Button>
                </Container>
            </Nav>
        </Navbar>
    )
}

export default Topbar;
