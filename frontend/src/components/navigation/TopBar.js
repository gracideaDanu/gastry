import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from "react-bootstrap/Nav";
import "./nav.scss";
import Button from "react-bootstrap/Button";



const Topbar = (props) => {

    return (
        <Navbar>
            <Nav className="justify-content-end fixed-top">
                <Button variant="dark" className={"align-right"} onClick={props.onClick}>Log out</Button>
            </Nav>
        </Navbar>
    )
}

export default Topbar;