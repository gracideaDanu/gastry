import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OrderListItem = (props) => {
    return (
        <Card className="supplier-card">
            <Card.Body>
                <Row className="align-items-center">
                    <Col>
                        <p>{props.name}</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default OrderListItem;