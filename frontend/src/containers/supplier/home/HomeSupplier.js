import React, { useState, useEffect, Component } from "react";
import SupplierLayout from "../supplierLayout/SupplierLayout";
import UserLayout from "../../customer/CustomerLayout";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";

class HomeSupplier extends Component {
    componentDidMount() {
        console.log(this.props.token);
    }

    render() {
        return (
            <SupplierLayout
                className="container-fluid"
                title="Was möchtest du bestellen?"
            >
                <h2 className="mb-4">New Arrivals</h2>
                <div className="row"></div>

                <h2 className="mb-4">Best Sellers</h2>
                <div className="row"></div>
            </SupplierLayout>
        );
    }
}
const mapsStateToProps = (state) => {
    return {
        token: state.auth.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (data) => dispatch(actions.register(data)),
        fetchCatalog: (payload) => dispatch(actions.fetchCatalog(payload)),
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(HomeSupplier);
