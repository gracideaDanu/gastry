import React, { Component } from "react";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";
import CustomerLayout from "../../customer/CustomerLayout";
import SupplierLayout from "../../supplier/SupplierLayout";
import OrderListItem from "../../../components/orders/OrderListItem";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

class Orderlist extends Component {
    componentDidMount() {
        console.log(this.props.userType)
        let payload = {
            token: this.props.token,
        };
        this.props.fetchOrders(payload);
    }

    render() {
        
        const orders = this.props.orders.map((item) => (
            <Link
                to={{
                    pathname: `/order/chat`,
                    state: { order: item },
                }}
                key={item._id}
            >
                {this.props.userType === "customer" ? (
                    <OrderListItem
                        name={item.supplier_id.company}
                        orderNr={item._id}
                    />
                ) : (
                    <OrderListItem
                        name={item.customer_id.company}
                        orderNr={item._id}
                    />
                )}
            </Link>
        ));
        return this.props.userType === "supplier" ? (
            <SupplierLayout title="Orders" description="" location={"orders"}>
                <Container fluid>{orders}</Container>
            </SupplierLayout>
        ) : (
            <CustomerLayout title="Orders" description="" location={"orders"}>
                <Container fluid>{orders}</Container>
            </CustomerLayout>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        token: state.auth.token,
        orders: state.fetchOrders.orders,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: (payload) => dispatch(actions.fetchOrders(payload)),
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(Orderlist);
