import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import SupplierCatList from "../../components/list/CatalogCustomerRow.js/CatalogCustomerRow";
import CustomerLaylout from "../common/CustomerLayout";

class CatalogCustomer extends Component {
    componentDidMount() {
        const { supplierId } = this.props.location.state;
        this.props.fetchSupplierCatalog(supplierId);
    }

    renderCatalog = () => {
        if (this.props.catalog) {
            if (this.props.catalog.length === 0) {
                return <div>No Items Found</div>;
            }
            const catArray = this.props.catalog.map((item, index) => (
                <SupplierCatList
                    key={item._id}
                    index={index}
                    item={item}
                ></SupplierCatList>
            ));
            return <div>{catArray}</div>;
        }
        return <div>loading</div>;
    };

    render() {
        return (
            <CustomerLaylout title="Catalog">
                {this.renderCatalog()}
            </CustomerLaylout>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        catalog: state.customerCatalog.catalog,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSupplierCatalog: (payload) =>
            dispatch(actions.fetchSupplierCatalog(payload)),
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(CatalogCustomer);
