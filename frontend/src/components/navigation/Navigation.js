import React, {} from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./nav.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NavigationButton from "./NavigationButton";

const borderbetween = {
    backgroundColor: 'red'
    //'border-right': "1px solid"
};

const Navigation = (props) => {
    const pagelist = props.pagelist
    const showpages = pagelist.map((page,index)=>
        <Col key={index}>
            <NavigationButton name={page.name} link={page.link} key={index}/>
        </Col>
    )
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
                            {showpages}
                        </Row>
                    </Container>
                </Nav>
            </Navbar>
        </>
    )
}

export default Navigation;
