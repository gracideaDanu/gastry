import React, {Component} from 'react'
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap';
import Nav from "react-bootstrap/Nav";
import "./nav.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import search from "../../assets/icons/Lupe.svg";
import chat from "../../assets/icons/ChatBlase.svg"
import NavItem from "react-bootstrap/NavItem";


const Topbar = (props) => {

    return (
        <Navbar fixed={"top"} expand={"*"}>
            <Container>
                <LinkContainer className={'navItem'}  to={"Chat"}>
                    <Button variant="dark" className={""}>
                        <img className="svg" src={chat} width="20" height="20" alt={'chat'}/>
                    </Button>
                </LinkContainer>
                <Button variant="dark" className={""} onClick={props.onClick}>Log out</Button>
                <Button variant={"dark"} >
                    <img className="svg" src={search} width="20" height="20" alt={'search'}/>
                </Button>
                {
                    props.showBasket
                        ?
                        <LinkContainer to={{pathname: props.basketState.supplierName + "/basket", state:props.basketState}}>
                            <p>Basket</p>
                    </LinkContainer>
                        : null
                }
            </Container>
        </Navbar>
    )
}

export default Topbar;