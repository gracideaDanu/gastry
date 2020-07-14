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
import {Pagination} from "react-bootstrap";

class SuppliersList extends Component {
    state = {
        active: 1,
        pages: [],
        filteredList: [],
        searchInputValue: "",
    };

    componentDidMount() {
        const category = this.props.location.state.category;
        const payload = {
            data: {
                category: category
            }
        };
        console.log(payload);
        console.log("called");
        this.props.fetchSuppliersList(payload);
        console.log("hoi")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(((prevProps.list !== this.props.list) && (this.props.list.length > 0)) ||  ( this.state.active !== prevState.active)) {
            this.renderPagination()
        }
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

    /*changePageHandler = (number) => {
        console.log(this.state.active)
        const paginationItems = [...this.state.pages];
        const active = this.state.active;
        const deactivatedItem = <Pagination.Item active={active === this.state.active}> <span onClick={() => this.changePageHandler(active)}> {active + 1}</span></Pagination.Item>
        const activatedItem = <Pagination.Item active={number === this.state.active}> <span onClick={() => this.changePageHandler(number)}> {number + 1}</span></Pagination.Item>
        paginationItems[active] = deactivatedItem;
        paginationItems[number] = activatedItem;
        console.log(number);

        this.setState({
            ...this.state,
            active: number,
            pages: paginationItems
        });
    }; */

    changeActive = (x) => {
        console.log(x)
        const active = x;
        this.setState({
            ...this.state,
            active: active
        });
    }

    renderPagination = () => {
        let itemNumbers = 0;
        const paginationItems = [];
        for (let x = 1; x <= this.props.list.length; x++ ) {
            if(itemNumbers === 0) {
                itemNumbers = 0;
                paginationItems.push(<Pagination.Item onClick={() => this.changeActive(x)} active={this.state.active === x}> {x}</Pagination.Item>)
            }
            else {

                itemNumbers++

            }

        }

        this.setState({
            ...this.state,
            pages: paginationItems
        })



    };

    renderSuppliers = () => {
        console.log("renderiiing")
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
                    <Pagination> {this.state.pages}</Pagination>

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
        fetchSuppliersList: (payload) => dispatch(fetchSuppliersList(payload)),
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(SuppliersList);
