import React, { Component } from "react";
import Item from "../Item";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Counter from "../../counter/Counter";

import "./CatalogCustomerRow.css";

class CatalogCustomerRow extends Component {
    countDown = () => {};

    countUp = () => {};

    onChange = () => {};

    render() {
        const { item } = this.props;

        return (
            <Accordion>
                <Card key={item._id}>
                    <Card.Header>
                        <Row>
                            <Col xs={9}>
                                <Item
                                    key={item._id}
                                    name={item.name}
                                    price={item.price}
                                    size={item.size}
                                ></Item>
                            </Col>
                            <Col xs={3}>
                                <Counter
                                    countDown={this.countDown}
                                    countUp={this.countUp}
                                    onChange={this.onChange}
                                />
                            </Col>
                        </Row>
                    </Card.Header>
                </Card>
            </Accordion>
        );
    }
}

export default CatalogCustomerRow;
