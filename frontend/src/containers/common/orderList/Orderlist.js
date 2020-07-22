import React, {Component} from "react";
import * as actions from "../../../redux/actions";
import {connect} from "react-redux";
import CustomerLayout from "../../customer/CustomerLayout";
import SupplierLayout from "../../supplier/supplierLayout/SupplierLayout";
import OrderListItem from "../../../components/orders/OrderListItem";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import gastry from "../../../assets/icons/logo.svg"
import {Fade} from "@material-ui/core";
import {SwipeableList, SwipeableListItem} from "@sandstreamdev/react-swipeable-list";
import Card from "react-bootstrap/Card";
import deleteIcon from "../../../assets/icons/bin.svg";
import edit from "../../../assets/icons/pen.svg";
import Row from "react-bootstrap/Row";


class Orderlist extends Component {
    state = {
        orders: []
    };

    componentDidMount() {
        let payload = {
            token: this.props.token,
        };
        let fetchedOrders = this.props.fetchOrders(payload);
        this.setState({
                ...this.state,
                orders: fetchedOrders
            }
        )
    }

    changeStatus = (e, id) => {
        if (e === 1) {
            let payload = {
                token: this.props.token,
                orderId: id,
                data: {
                    status: "closed"
                }
            }
            this.props.modifyOrder(payload)
        } else if (e === -1) {
            let payload = {
                token: this.props.token,
                orderId: id,
                data: {
                    status: "canceled"
                }
            }
            this.props.modifyOrder(payload)
        }
    }


    render() {

        const orders = this.props.orders.map((item, key) => (
            <Link
                to={{
                    pathname: `/order/chat`,
                    state: {order: item},
                }}
                key={item._id}
            >
                {this.props.userType === "customer" ? (
                    <OrderListItem
                        logo={gastry}
                        name={item.supplier_id.company}
                        orderNr={item._id}
                        status={item.status}
                        style={{color: "green"}}
                    />
                ) : (
                    <SwipeableListItem
                        swipeLeft={{
                            content:
                                <Container style={{paddingRight: "0"}}>
                                    <Card style={{backgroundColor: "#ff8282", padding: "0.35rem 0.8rem"}}>
                                        <Card.Header style={{backgroundColor: "transparent", border: "none"}}>
                                            <Row className={"d-flex justify-content-end"}>
                                                <p style={{marginBottom: "0"}}>Bestellung</p>
                                            </Row>
                                            <Row className={"d-flex justify-content-end"}>
                                                <p style={{marginBottom: "0"}}>stornieren</p>
                                            </Row>
                                        </Card.Header>
                                    </Card>
                                </Container>,
                            action: () => this.changeStatus(-1, item._id)
                        }}
                        swipeRight={{
                            content:
                                <Container style={{paddingLeft: "0"}}>
                                    <Card style={{backgroundColor: "#9CBB49", padding: "0.35rem 0.8rem"}}>
                                        <Card.Header style={{backgroundColor: "transparent", border: "none"}}>
                                            <Row className={"d-flex justify-content-start"}>
                                                <p style={{marginBottom: "0"}}>Bestellung</p>
                                            </Row>
                                            <Row className={"d-flex justify-content-start"}>
                                                <p style={{marginBottom: "0"}}>abschließen</p>
                                            </Row>
                                        </Card.Header>
                                    </Card>
                                </Container>,
                            action: () => this.changeStatus(1, item._id)
                        }}
                    >
                        <OrderListItem
                            logo={gastry}
                            name={item.customer_id.company}
                            orderNr={item._id}
                            status={item.status}
                        />
                    </SwipeableListItem>
                )}
            </Link>
        ));
        return this.props.userType === "supplier" ? (
            <SupplierLayout title="Orders" location={"orders"} description={"Bestelleingänge"}>
                <Container fluid>
                    <SwipeableList>
                        {orders}
                    </SwipeableList>
                </Container>
            </SupplierLayout>
        ) : (
            <CustomerLayout title="Orders" location={"orders"} description={"Meine \n Bestellungen"}>
                <Container fluid>{orders}</Container>
            </CustomerLayout>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        token: state.auth.token,
        orders: state.orders.orders,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: (payload) => dispatch(actions.fetchOrders(payload)),
        flush: () => dispatch(actions.flushOrders()),
        modifyOrder: (payload) => dispatch(actions.modifyOrders(payload))
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(Orderlist);
