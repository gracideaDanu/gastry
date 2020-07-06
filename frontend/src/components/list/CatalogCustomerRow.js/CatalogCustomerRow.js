import React, { Component } from "react";
import Item from "../Item";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Counter from "../../counter/Counter";

import "./CatalogCustomerRow.css";

class CatalogCustomerRow extends Component {

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
                                    amount={this.props.amount}
                                    countDown={this.props.subtract}
                                    countUp={this.props.add}
                                    onChange={this.onChange}
                                />
                            </Col><Col xs={1}>
                            <button onClick={this.props.add} className="btn btn-primary circle"> + </button>

                        </Col>
                        </Row>
                    </Card.Header>
                </Card>
            </Accordion>
        );
    }
}

export default CatalogCustomerRow;
