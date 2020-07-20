import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    fetchSuppliersList,
    fetchSuppliersListLength,
} from "../../../redux/actions";
import CustomerLayout from "../../customer/CustomerLayout";
import Supplier from "../../../components/list/Supplier";
import Pagination from "../../../components/pagination/Pagination";
import Search from "../../../components/search/Search";
import Container from "react-bootstrap/Container";
import "./SuppliersList.css";
import * as actions from "../../../redux/actions/index";

class SuppliersList extends Component {
    state = {
        filteredList: [],
        searchInputValue: "",
        page: 0,
        limit: 2,
    };

    componentDidMount() {
        const { category } = this.props.match.params;
        this.props.fetchSuppliersList({
            data: { category: category, limit: this.state.limit, skip: 0 },
        });
        this.props.fetchSuppliersListLength({
            data: { category },
        });
    }

    componentWillUnmount() {
        this.props.flush();
    }

    handleInputChange = (searchInputValue) => {
        this.setState({ searchInputValue });
        this.handleSearch(searchInputValue);
    };

    handleSearch = (searchInputValue) => {
        const { category } = this.props.match.params;
        this.props.fetchSuppliersList({
            data: {
                category: category,
                searchValue: searchInputValue,
                limit: this.state.limit,
                skip: 0,
            },
        });
        this.props.fetchSuppliersListLength({
            data: { category, searchValue: searchInputValue },
        });
    };

    onPageClick = (pageNr) => {
        const { category } = this.props.match.params;
        this.setState({ page: pageNr }, () =>
            this.props.fetchSuppliersList({
                data: {
                    category: category,
                    limit: this.state.limit,
                    skip: this.state.page * this.state.limit,
                },
            })
        );
    };

    renderSuppliers = () => {
        const { list } = this.props;
        if (!list) return <div>Loading</div>;


        return list.map((supplier) => {
            return (
                <Link
                    key={supplier._id}
                    to={{
                        pathname: `/catalog/${supplier.company}`,
                        state: {
                            supplierId: supplier._id,
                            supplierName: supplier.company,
                        },
                    }}
                >
                    <Supplier
                        key={supplier._id}
                        name={supplier.company}
                        address={supplier.address.street}
                    />
                </Link>
            );
        });
    };

    render() {
        return (
            <CustomerLayout
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
                <Container fluid>{this.renderSuppliers()}</Container>
                <Container className="d-flex justify-content-center">
                    <Pagination
                        listLength={this.props.listLength}
                        limit={this.state.limit}
                        page={this.state.page}
                        onPageClick={this.onPageClick}
                    />
                </Container>
            </CustomerLayout>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        list: state.suppliersList.list,
        listLength: state.suppliersList.listLength,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSuppliersList: (payload) => dispatch(fetchSuppliersList(payload)),
        fetchSuppliersListLength: (payload) =>
            dispatch(fetchSuppliersListLength(payload)),
        flush: () => dispatch(actions.flushSuppliersList()),
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(SuppliersList);
