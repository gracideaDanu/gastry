import React from 'react';
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './chatMessage.scss'

const OtherChatMessage = (props) => {
    return (
        <div className="messageRow d-flex justify-content-start">
            <div className={"messageframe otherMessage"}>
                <p style={{ fontSize: "18px"}}>
                    {props.text}
                </p>
                <footer className={"float-right"}  style={{fontSize: "12px"}}>
                    <p>{props.date}</p>

                </footer>
            </div>
        </div>

    );
};

export default OtherChatMessage;
