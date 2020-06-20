import React, {Component} from 'react'
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap';
import Nav from "react-bootstrap/Nav";
import "./nav.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


const Topbar = (props) => {

    return (
        <Navbar fixed={"top"} expand={"*"}>
            <Nav >
                <Container className={"justify-content-end"}>
                    <Button variant="dark" className={""} onClick={props.onClick}>Log out</Button>
                </Container>
            </Nav>
        </Navbar>
    )
}

export default Topbar;