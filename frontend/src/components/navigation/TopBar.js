import React from "react";

import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import chat from "../../assets/icons/ChatBlase.svg";
import "./nav.scss";

const Topbar = (props) => {
    return (
        <Navbar fixed={"top"} expand={"*"}>
            <Container>
                <LinkContainer className={"navItem"} to={"Chat"}>
                    <Button variant="dark" className={""}>
                        <img
                            className="svg"
                            src={chat}
                            width="20"
                            height="20"
                            alt={"chat"}
                        />
                    </Button>
                </LinkContainer>
                <Button variant="dark" className={""} onClick={props.onClick}>
                    Log out
                </Button>
                {props.showBasket ? (
                    <LinkContainer
                        to={{
                            pathname:
                                props.basketState.supplierName + "/basket",
                            state: props.basketState,
                        }}
                    >
                        <p>Basket</p>
                    </LinkContainer>
                ) : null}
            </Container>
        </Navbar>
    );
};

export default Topbar;
