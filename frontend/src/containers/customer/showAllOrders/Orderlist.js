import React, {Component} from 'react';
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";
import CustomerLayout from "../CustomerLayout";
import UserLayout from "../CustomerLayout";
import {fetchOrders} from "../../../redux/actions";
import SupplierCatListView from "../../../components/list/SupplierCatListView";
import OrderListItem from "../../../components/orders/OrderListItem";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";


class Orderlist extends Component {

    componentDidMount() {
        let payload = {
            token: this.props.token
        }
        this.props.fetchOrders(payload)
    }

    render() {
        const orders = this.props.orders.map((item, index) =>
            (
                <Link to={{
                    pathname: `/order/chat`,
                    state: {order: item}
                }}>
                <OrderListItem name={item.date}/>
                </Link>

            ));
        return (
            <CustomerLayout
                title='Orders'
                description=''
                location={"orders"}
            >
                <Container fluid>
                    {orders}
                </Container>


            </CustomerLayout>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        token: state.auth.token,
        orders: state.fetchOrders.orders
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: (payload) =>
            dispatch(actions.fetchOrders(payload)),

    };
};


export default connect(mapsStateToProps,mapDispatchToProps)(Orderlist);