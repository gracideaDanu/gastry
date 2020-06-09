import React, {} from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./nav.scss";
import {LinkContainer} from "react-router-bootstrap";
import NavItem from "react-bootstrap/NavItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const borderbetween = {
    backgroundColor: 'red'
    //'border-right': "1px solid"
};

const Navigation = () => {
    return (
        <>
            <style type="text/css">
                {`
    .navrow {
        width: 100%;
        border-top: 1px solid;
    }
    .navItem {
    font-size: 1.5em;
    text-align: center;
  }
    `}
            </style>
            <Navbar>
                <Nav className="fixed-bottom">
                    <Container className={"justify-content-center"}>
                        <Row className={"navrow"}>
                            <Col style={{ borderRight: "1px solid" }}>
                                <LinkContainer className={'navItem'}  to="/home">
                                    <NavItem  >Home</NavItem>
                                </LinkContainer>
                            </Col>
                            <Col>
                                <LinkContainer className={'navItem'} to="/search">
                                    <NavItem>Search</NavItem>
                                </LinkContainer>
                            </Col>
                            <Col style={{ borderLeft: "1px solid" }}>

                                <LinkContainer className={'navItem'} to="/profile">
                                    <NavItem>Profile</NavItem>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </Container>
                </Nav>
            </Navbar>
        </>
    )
}

export default Navigation;
