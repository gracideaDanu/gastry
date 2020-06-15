import React from 'react';
import Item from "./Item";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../auth/Input";
import {Modal} from "react-bootstrap";


const SupplierCatListView = (props) => {
    const item = props.item;
    const index = props.index;

    return (
        <Accordion>
        <Card key={item._id}>

        <Card.Header>
                <Row>
                    <Col xs={9}>
                        <Item key={item._id} name={item.name} catg={item.tags} price={item.price} size={item.size}></Item>
                    </Col>
                    <Col xs={3}>
                        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                            extend
                        </Accordion.Toggle>
                    </Col>
                </Row>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
                <Card.Body>{item.description}
                    <button onClick={props.deleteHanlder.bind(this) } value={item._id} >Delete</button>
                    <button onClick={props.modal } value={item._id} >Modify</button>
                    <Modal show={props.showModal} onHide={props.modal}  >
                        <Modal.Header closeButton>
                                <Modal.Title>Modifying current item: {item.name}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body id={index}>
                            <label>Tag</label>
                            <input value={item.tags} name="tags" onChange={props.change}/>
                            <br/>
                            <label>Name</label>
                            <input value={item.name} name="name" onChange={props.change}/>
                            <br/>
                            <label>Size</label>
                            <input value={item.size} name="size" onChange={props.change}/>
                            <br/>
                            <label>Price</label>
                            <input value={item.price} name="price" onChange={props.change}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={props.modal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={props.modal}>
                                Save Changes
                            </Button>
                        </Modal.Footer>

                    </Modal>


                </Card.Body>

            </Accordion.Collapse>

        </Card>
        </Accordion>

    )


};

export default SupplierCatListView;
