import React from 'react';
import Item from "./Item";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SupplierCatListView = (props) => {
    const itemlist = props.itemlist
    const showItemlist = itemlist.map((item, index) =>
        <Card key={index}>
            <Card.Header>
                <Row>
                    <Col xs={9}>
                        <Item key={index} name={item.name} catg={item.catg} price={item.price}></Item>
                    </Col>
                    <Col xs={3}>
                        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                            extend
                        </Accordion.Toggle>
                    </Col>
                </Row>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
                <Card.Body>{item.description}</Card.Body>
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