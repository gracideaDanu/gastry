import React, { Component } from "react";
import Supplier from "../../components/list/Supplier";
import { connect } from "react-redux";
import { fetchSuppliersList } from "../../redux/actions/suppliersList";

import "./SuppliersList.css";

class SuppliersList extends Component {

    componentDidMount() {
        this.props.fetchSuppliersList();
    }

    renderSuppliers = () => {
        const { list } = this.props;
        if (list) {
            return list.map((supplier) => {
                return (
                    <Supplier
                        key={supplier._id}
                        name={supplier.name}
                        address={supplier.address.street}
                    />
                );
            });
        } else {
            return <div>Loading</div>;
        }
    };

    render() {
        return <div>{this.renderSuppliers()}</div>;
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
