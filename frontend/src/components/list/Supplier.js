import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const Supplier = (props) => {
    return (
        <Card className="supplier-card">
            <Card.Body>
                <Row className="align-items-center">
                    <Col>
                        <p>{props.name}</p>
                    </Col>
                    <Col>
                        <p>{props.address}</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Supplier;
