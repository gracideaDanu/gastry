import React, {Component} from "react";
import Item from "../Item";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Counter from "../../counter/Counter";

import "./CatalogCustomerRow.scss";

class CatalogCustomerRow extends Component {

    render() {
        const {item} = this.props;

        return (
            <Accordion>
                <Card key={item._id}>
                    <Card.Header>
                        <Row>
                            <Col xs={8}>
                                <Item
                                    key={item._id}
                                    name={item.name}
                                    price={item.price}
                                    size={item.size}
                                />
                            </Col>
                            <Col xs={4} className={"d-flex align-items-center "}>
                                <Counter
                                    itemId={item._id}
                                    amount={this.props.amount}
                                    countDown={this.props.subtract}
                                    countUp={this.props.add}
                                    onChange={this.props.change}
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
