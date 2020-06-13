import React from 'react';
import Item from "./Item";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../auth/Input";

const SupplierCatListView = (props) => {
    const itemlist = props.itemlist
    const showItemlist = itemlist.map((item, index) =>
        <Card key={item._id} >
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
                            <Accordion>

                                        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                            Modify
                                        </Accordion.Toggle>

                                    <Accordion.Collapse eventKey={index}>
                                        <Card.Body>
                                            <label>Tag</label>
                                            <input value={item.tags} readOnly={true}/>
                                            <br/>
                                            <label>Name</label>
                                            <input value={item.name} readOnly={true}/>
                                            <br/>
                                            <label>Size</label>
                                            <input value={item.size} readOnly={true}/>
                                            <br/>
                                            <label>Price</label>
                                            <input value={item.price} readOnly={true}/>
                                        </Card.Body>
                                    </Accordion.Collapse>



                            </Accordion>

                </Card.Body>

            </Accordion.Collapse>

        </Card>
    )

    return (
        <Accordion>
            {showItemlist}
        </Accordion>
    );
};

export default SupplierCatListView;