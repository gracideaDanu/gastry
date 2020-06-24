import React from 'react';
import {LinkContainer} from "react-router-bootstrap";
import NavItem from "react-bootstrap/NavItem";
import Col from "react-bootstrap/Col";
import search from "../../assets/icons/Lupe.svg";

const NavigationButton = (props) => {
    return (
        <>
            <LinkContainer className={'navItem'}  to={props.link}>
                <NavItem >
                    <img className="svg" src={props.picref} width="30" height="30" alt={props.name}/>
                    <p>{props.name}</p>
                </NavItem>
            </LinkContainer>
        </>
    );
};

export default NavigationButton;