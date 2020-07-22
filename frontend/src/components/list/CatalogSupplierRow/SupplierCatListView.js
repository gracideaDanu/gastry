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
import Container from "react-bootstrap/Container";

const SupplierCatListView = (props) => {
    const item = props.item;
    const index = props.index;

    return (
        <Accordion style={{width:"100%"}}>
            <Card key={item._id}>
                <Accordion.Toggle eventKey={index} style={{textAlign: "left", backgroundColor: "white", border: "none",width:"100%"}}>
                    <Card.Header>
                        <Row>
                            <Col>
                                <p className={"productname nowrap"}>{item.name}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5}>
                                <p className={"nowrap"}>Einheit: {item.size}</p>
                            </Col>
                            <Col xs={5}>
                                <p className={"nowrap"}>Preis: {item.price} €</p>
                            </Col>
                            <Col xs={2}>
                                <img src={dropdown} width={20} height={20}/>
                            </Col>
                        </Row>
                    </Card.Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                            <p className={"productdescription"}>{item.description}</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )


};

export default SupplierCatListView;
