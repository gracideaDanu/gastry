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

const NavigationBottom = (props) => {
    const pagelist = props.pagelist
    const showpages = pagelist.map((page, index) =>
        <Col key={index}>
            <NavigationButton name={page.name} link={page.link} picref={page.picref} key={index}/>
        </Col>
    )
    return (
        <>
            <Navbar expand={"*"} fixed={"bottom"}>
                <Container>
                    <Row style={{height: "100%",width:"100%"}}>
                        {showpages}
                    </Row>
                </Container>

            </Navbar>
        </>
    )
}

export default NavigationBottom;
