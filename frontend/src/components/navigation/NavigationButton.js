import React from 'react';
import {LinkContainer} from "react-router-bootstrap";
import NavItem from "react-bootstrap/NavItem";
import Col from "react-bootstrap/Col";

const NavigationButton = (props) => {
    return (
        <>
            <LinkContainer className={'navItem'}  to={props.link}>
                <NavItem >{props.name}</NavItem>
            </LinkContainer>
        </>
    );
};

export default NavigationButton;