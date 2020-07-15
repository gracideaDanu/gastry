import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSuppliersList } from "../../../redux/actions";
import UserLayout from "../../customer/CustomerLayout";
import Supplier from "../../../components/list/Supplier";
import Search from "../../../components/search/Search";

import "./SuppliersList.css";
import CustomerLaylout from "../CustomerLayout";
import Container from "react-bootstrap/Container";

class SuppliersList extends Component {
    state = {
        filteredList: [],
        searchInputValue: "",
    };

    componentDidMount() {
        this.props.fetchSuppliersList();
    }

    handleInputChange = (searchInputValue) => {
        this.setState({ searchInputValue });
        this.handleSearch(searchInputValue);
    };

    handleSearch = (searchInputValue) => {
        if (searchInputValue.length > 0) {
            const filteredList = this.props.list.filter((row) => {
                const nameToLowerCase = row.name.toLowerCase();
                const filter = searchInputValue.toLowerCase();
                return nameToLowerCase.includes(filter);
            });
            this.setState({ filteredList });
        }
    };

    renderSuppliers = () => {
        const { list } = this.props;
        const { searchInputValue, filteredList } = this.state;
        const renderedList = searchInputValue.length > 0 ? filteredList : list;

        if (!list) return <div>Loading</div>;

        return renderedList.map((supplier) => {
            return (
                <Link
                    key={supplier._id}
                    to={{
                        pathname: `/catalog/${supplier.name}`,
                        state: {
                            supplierId: supplier._id,
                            supplierName: supplier.name,
                        },
                    }}
                >
                    <Supplier
                        key={supplier._id}
                        name={supplier.name}
                        address={supplier.address.street}
                    />
                </Link>
            );
        });
    };

    render() {
        return (
            <UserLayout
                className="container-fluid"
                title="Suppliers"
                description="Bei wem möchtest du bestellen?"
                location={"home"}
                showBack={true}
            >
                <Search
                    onChange={this.handleInputChange}
                    value={this.state.searchInputValue}
                />
                <Container fluid>
                    {this.renderSuppliers()}
                </Container>
            </UserLayout>
        );
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
