import React from 'react';
import Item from "../Item";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../auth/Input";
import {Modal} from "react-bootstrap";
import "./SupplierCatListView.scss"
import dropdown from "../../../assets/icons/drop-down-arrow.svg"

const SupplierCatListView = (props) => {
    const item = props.item;
    const index = props.index;

    return (
        <Accordion>
            <Card key={item._id}>
                <Card.Header>
                    <Row>
                        <p className={"productname"}>{item.name}</p>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <p>Einheit: {item.size}</p>
                        </Col>
                        <Col xs={4}>
                            <p>Preis: {item.price} €</p>
                        </Col>
                        <Col xs={4} className={"d-flex justify-content-center"}>
                            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                <img src={dropdown} width={30} height={30} alt={"erweitern"}/>
                            </Accordion.Toggle>
                        </Col>
                    </Row>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body>{item.description}
                        <button onClick={props.deleteHanlder.bind(this)} value={item._id}>Delete</button>
                        <button onClick={props.toggle}>Toggle</button>
                    </Card.Body>
                </Accordion.Collapse>

            </Card>
        </Accordion>

    )


};

export default SupplierCatListView;
