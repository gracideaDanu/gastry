import React, {Component} from 'react'
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap';
import Nav from "react-bootstrap/Nav";
import "./nav.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import search from "../../assets/icons/Lupe.svg"


const Topbar = (props) => {

    return (
        <Navbar fixed={"top"} expand={"*"}>
                <Container >
                    <Button variant="dark" className={""} onClick={props.onClick}>Log out</Button>
                    <Button variant={"dark"} >
                        <img className="svg" src={search} width="20" height="20" alt={'search'} />
                    </Button>
                </Container>
        </Navbar>
    )
}

export default Topbar;