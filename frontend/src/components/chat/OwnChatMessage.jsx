import React from 'react';
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const OwnChatMessage = (props) => {
    return (
        <Row>
            <Col sx={2}>
            </Col>
            <Col xs={10}>
                <Card>
                    <Card.Body>
                        <Card.Text className="blockquote mb-0">
                            <p style={{textAlign:"right",fontSize:"14px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                                {props.text}
                            </p>
                            <footer className={"blockquote-footer float-right"}>
                                Someone famous in <cite title="Source Title">Source Title {props.date}</cite>
                            </footer>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
};

export default OwnChatMessage;