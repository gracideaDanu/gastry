import { Row, Col } from "react-bootstrap";
import React from "react";

export const EstimatedTotal = (props) => {
    return (
        <Row>
            <Col xs={6}>
                <h3>Est. Total:</h3>
            </Col>
            <Col xs={6}>
                <h3>{props.total}</h3>
            </Col>
        </Row>
    );

}
export default EstimatedTotal;
