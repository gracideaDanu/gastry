import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CustomButton from "../../../components/button/Button"

import "./Signup.css"

const SignupOptions = (props) => {
    return (
        <div className="signup-container">
            <h3 className="signup-msg">Sag uns <br/> was du bist</h3>
            <div className="signup-options">
                <Link to={{
                    pathname: "/register/supplier"
                }}>
                    <CustomButton type="submit" label="Lieferant" className="button yellow-btn"/>
                </Link>
                <p className="middle-border">Oder</p>
                <Link to={{
                    pathname: "/register/customer"
                }}>
                    <CustomButton type="submit" label="Gastronom" className="button yellow-btn"/>
                </Link>
            </div>
            <div className="legal">
                <Link>AGB |</Link>
                <Link> Impressum |</Link>
                <Link> Cookie</Link>
            </div>
        </div>
    )
}

export default SignupOptions;