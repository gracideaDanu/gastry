import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./OrderListItem.css"

const OrderListItem = ({ name, orderNr }) => {
    return (
        <Card className="supplier-card order-list">
            <Card.Body>
                <Row className="align-items-center">
                    <Col>
                        <h5 className="order-title">{name}</h5>
                        <p className="orderNr">
                            Betsellnummer: {orderNr.substr(orderNr.length - 5).toUpperCase()}
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default OrderListItem;
