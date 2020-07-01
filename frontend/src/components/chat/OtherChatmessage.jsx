import React from 'react';
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const OtherChatMessage = (props) => {
    return (
        <Row>
            <Col xs={10}>
                <Card>
                    <Card.Body>
                        <Card.Text className="blockquote mb-0">
                            <p style={{fontSize:"14px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                                {props.text}
                            </p>
                            <footer className={"blockquote-footer"}>
                                Someone famous in <cite title="Source Title">Source Title {props.date}</cite>
                            </footer>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col sx={2}>
            </Col>
        </Row>

    );
};

export default OtherChatMessage;