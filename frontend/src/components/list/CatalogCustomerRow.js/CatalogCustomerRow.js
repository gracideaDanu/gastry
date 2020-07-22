import React, {Component} from "react";
import Item from "../Item";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Counter from "../../counter/Counter";

import "./CatalogCustomerRow.scss";
import Button from "react-bootstrap/Button";

class CatalogCustomerRow extends Component {

    render() {
        const {item} = this.props;

        return (
            <Accordion>
                <Card key={item._id}>
                    <Card.Header style={{backgroundColor:"white"}}>
                        <Row>
                            <Col xs={8}>
                                <Accordion.Toggle style={{textAlign: "left", backgroundColor: "white", border: "none",width:"100%"}}
                                                  eventKey={item._id}>
                                    <Item
                                        key={item._id}
                                        name={item.name}
                                        price={item.price}
                                        size={item.size}
                                    />
                                </Accordion.Toggle>
                            </Col>
                            <Col xs={4} className={"d-flex align-items-center middleRow"}>
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
                    <Accordion.Collapse eventKey={item._id}>
                        <Card.Body>{
                            item.description}
                        </Card.Body>

                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default CatalogCustomerRow;
