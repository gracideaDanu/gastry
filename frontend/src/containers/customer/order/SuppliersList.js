import React, { Component } from "react";
import Supplier from "../../../components/list/Supplier";
import { connect } from "react-redux";
import { fetchSuppliersList } from "../../../redux/actions/orders/customer/suppliersList";
import { Link } from "react-router-dom"

import "./SuppliersList.css";
import UserLayout from "../customer/CustomerLayout";

class SuppliersList extends Component {

    componentDidMount() {
        this.props.fetchSuppliersList();
    }

    renderSuppliers = () => {
        const { list } = this.props;
        if (list) {
            return list.map((supplier) => {
                return (
                    <Link to={{
                        pathname: `/catalog/${supplier.name}`,
                        state: { supplierId: supplier._id, supplierName: supplier.name }
                    }}>
                        <Supplier
                            key={supplier._id}
                            name={supplier.name}
                            address={supplier.address.street}
                        />
                    </Link>
                );
            });
        } else {
            return <div>Loading</div>;
        }
    };

    render() {
        return <UserLayout className='container-fluid'
                           title='OrderCustomer Page'
                           description='Was möchtest du bestellen ?'>
            {this.renderSuppliers()}
        </UserLayout>;
    }
}

const mapsStateToProps = (state) => {
    return {
        list: state.suppliersList.list,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSuppliersList: () => dispatch(fetchSuppliersList()),
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(SuppliersList);
