import React from 'react';
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './chatMessage.css'

const OwnChatMessage = (props) => {
    return (
        <Row className="messageBlock">
            <Col sx={2}>
            </Col>
            <Col xs={10}>
                <Card>
                    <Card.Body>
                        <Card.Text className="blockquote mb-0 messageBlock">
                            <p style={{textAlign:"right",fontSize:"14px"}}>
                                {props.text}
                            </p>
                            <footer className={"blockquote-footer float-right"}>
                                {props.date}

                            </footer>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
};

export default OwnChatMessage;
