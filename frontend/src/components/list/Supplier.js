import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./Supplier.scss"
import goto from "../../assets/icons/next.svg";

const Supplier = (props) => {
    return (
        <Card className="supplier-card">
            <Card.Body>
                <Row className="align-items-center">
                    <Col xs={2}>
                        <img className={"supplierlogo"} src={props.pic} width="30" height="30" alt={props.name}/>
                    </Col>
                    <Col xs={8}>
                        <p>{props.name}</p>

                        <p>{props.address}</p>
                    </Col>
                    <Col xs={2}>
                        <img className={"forward"} src={goto} width="30" height="30" alt={"back"}/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Supplier;
