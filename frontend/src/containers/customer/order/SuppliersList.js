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
import logo from "../../../assets/icons/login-logo.svg"
import supplier from "../../../assets/icons/logistics.svg"

let category;
class SuppliersList extends Component {
    state = {
        filteredList: [],
        searchInputValue: "",
        page: 0,
        limit: 10,
    };

    componentDidMount() {
        category = this.props.match.params.category;
        console.log(category);
        this.props.fetchSuppliersList({
            data: { category: category, limit: this.state.limit, skip: 0 },
        });
        this.props.fetchSuppliersListLength({
            data: { category },
        });
    }

    componentWillUnmount() {
        this.props.flush();
        category = undefined;
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
        if (!list) return <div>Loading</div>
        if (list){
            if (list.length <= 0) {
                return <div style={{'text-align':'center', 'margin-top': "3rem"}}> <img className="popupImage" src={supplier} style={{'max-width':'12rem'}} /> <h5 style={{'margin-top':"3rem"}}>Leider keinen Lieferanten gefunden </h5> <h5> Versuche es wo anders</h5> </div>

            }
        }
       console.log("hoi")


        return list.map((supplier) => {
            return (
                <Link
                    key={supplier._id}
                    to={{
                        pathname: `/catalog/${supplier.company}`,
                        state: {
                            supplierId: supplier._id,
                            supplierName: supplier.company,
                            category: category
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
                description="Bei wem m??chtest du bestellen?"
                location={"home"}
                showBack={true}
            >
                <div className="suppliers-container">

                     <div>
                            <Container fluid>
                                <Search
                                    onChange={this.handleInputChange}
                                    value={this.state.searchInputValue}
                                />
                            </Container>

                         <Container fluid>{this.renderSuppliers()}</Container>

                        </div>

                    <div className="pagination-buttons">
                        <Pagination
                            listLength={this.props.listLength}
                            limit={this.state.limit}
                            page={this.state.page}
                            onPageClick={this.onPageClick}
                        />
                    </div>
                </div>
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
