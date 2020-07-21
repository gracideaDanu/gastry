import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../../redux/actions";
import SupplierCatList from "../../../components/list/CatalogCustomerRow.js/CatalogCustomerRow";
import CustomerLaylout from "../CustomerLayout";
import Search from "../../../components/search/Search";
import {addItemToBasket} from "../../../redux/actions";
import pt from "moment/locale/pt";
import {AppBar, Tabs, Tab} from "@material-ui/core";
import Container from "react-bootstrap/Container";
import './CatalogCustomer.css'

let basketArray = [];
let supplierName, supplierId;

class CatalogCustomer extends Component {
    state = {
        basket: [],
        catalog: [],
        filteredList: [],
        searchInputValue: "",
        tab: "Food"
    };

    componentDidMount() {
        supplierId = this.props.location.state.supplierId;
        supplierName = this.props.location.state.supplierName;
        console.log(supplierId);
        console.log(supplierName)
        this.props.fetchSupplierCatalog(supplierId);
        if (this.props.basket !== null) {
            basketArray = [...this.props.basket];
            let basketSingle = basketArray.find(
                (basket) => basket.supplierId === supplierId
            );
            let basketItems = [];
            basketSingle
                ? (basketItems = [...basketSingle.basketItems])
                : (basketItems = []);
            console.log(basketItems);
            if (basketItems !== null) {
                this.setState({
                    ...this.state,
                    basket: basketItems,
                });
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.catalog !== this.props.catalog) {
            this.setState({
                ...this.state,
                catalog: this.props.catalog,
            });
        }
        this.findItemAmount("5eea44202681241ad4fd9c42");
    }

    componentWillUnmount() {
        this.props.flush();
    }

    changeAmountThroughField = (event, itemId) => {
        event.preventDefault();
        const {supplierId} = this.props.location.state;
        const catalog = [...this.state.catalog];

        let item = catalog.find((catItem) => catItem._id === itemId);
        const basket = [...this.state.basket];
        let incrementItem = basket.find((element) => item._id === element._id);
        if (incrementItem) {
            const index = basket.findIndex(
                (element) => element === incrementItem
            );
            let amount = event.target.value.length <= 0 ? 1 :  parseInt(event.target.value.replace(/\D/,''))

            amount < 0 ? (amount = 0) : (amount = amount);
            amount > 99 ? (amount = 99) : (amount = amount);
            incrementItem = {
                ...incrementItem,
                amount: amount,
            };
            amount === 0
                ? basket.splice(index, 1)
                : (basket[index] = incrementItem);
        } else {
            item = {
                ...item,
                amount: event.target.value.length <= 0 ? 1 :  parseInt(event.target.value.replace(/\D/,''))

            };
            basket.push(item);
            console.log("New item");
        }
        this.setState({
            ...this.state,
            basket: basket,
        });
        this.props.addItemToBasket({
            basket: basket,
            supplierId: supplierId,
        });
        console.log("HI PROPS");

    };

    addItemToBasketHandler = (event, itemId, option, amount) => {
        event.preventDefault();
        const {supplierId} = this.props.location.state;
        const catalog = [...this.state.catalog];
        let item = catalog.find((catItem) => catItem._id === itemId);
        const basket = [...this.state.basket];
        let incrementItem = basket.find((element) => item._id === element._id);
        if (incrementItem) {
            const index = basket.findIndex(
                (element) => element === incrementItem
            );
            let amount = incrementItem.amount;
            console.log("amount why 99")
            console.log(amount)
            switch (option) {
                case 1:
                    console.log("switch amount 1: " + amount)
                    amount += 1;
                    console.log("switch amount 1 after adding: " + amount)

                    break;
                case 2:
                    amount -= 1;
                    console.log(amount);
                    break;
            }
            amount <= 0 ? (amount = 0) : (amount = amount);
            amount > 99 ? (amount = 99) : (amount = amount);
            console.log(amount + " again checking amount")
            incrementItem = {
                ...incrementItem,
                amount: amount,
            };
            amount === 0
                ? basket.splice(index, 1)
                : (basket[index] = incrementItem);
        } else {
            switch (option) {
                case 2:
                    return;
                    break;
                default:
                    item = {
                        ...item,
                        amount: 1,
                    };
                    basket.push(item);
            }
            console.log("New item");
        }
        this.setState({
            ...this.state,
            basket: basket,
        });
        this.props.addItemToBasket({
            basket: basket,
            supplierId: supplierId,
        });
        console.log("HI PROPS");
    };
    findItemAmount = (itemId) => {
        let amount;


        let basket = [...this.state.basket];
        let item = basket.find((inc) => inc._id === itemId);
        item ? (amount = item.amount) : (amount = 0);
        return amount;
    };

    handleInputChange = (searchInputValue) => {
        this.setState({searchInputValue});
        this.handleSearch(searchInputValue);
    };

    handleSearch = (searchInputValue) => {
        if (searchInputValue !== "") {
            const filteredList = this.props.catalog.filter((row) => {
                const nameToLowerCase = row.name.toLowerCase();
                const filter = searchInputValue.toLowerCase();
                return nameToLowerCase.includes(filter);
            });
            this.setState({filteredList});
        }
    };

    renderCatalog = (tab) => {
        const {catalog} = this.props;
        const {searchInputValue, filteredList} = this.state;
        const renderedList = searchInputValue.length > 0 ? filteredList : catalog;

        if (!catalog) return <div>loading</div>;

        if (catalog.length === 0) {
            return <div>No Items Found</div>;
        }

        return renderedList.map((item, index) => {
            if(item.tags === tab) {
                return <SupplierCatList
                    change={this.changeAmountThroughField}
                    amount={this.findItemAmount(item._id)}
                    add={(e) => this.addItemToBasketHandler(e, item._id, 1)}
                    subtract={(e) => this.addItemToBasketHandler(e, item._id, 2)}
                    key={item._id}
                    index={index}
                    item={item}
                ></SupplierCatList>
            }
        });
    };

    tabChangeHandler = (index) => {
        switch (index) {
            case 1: this.setState({
                ...this.state,
                tab: "Food"
            }); break;

            case 2: this.setState({
                ...this.state,
                tab: "Drink"
            }); break
        }
    }

    render() {
        return (
            <CustomerLaylout
                title="Catalog"
                showBasket="true"
                description={"Welche Produkte \n möchtest du?"}
                basketState={{
                    supplierName: supplierName,
                    supplierId: supplierId,
                    basket: this.state.basket,
                }}
                location={"home"}
                showBack={true}
            >


                <Container fluid>
                    <Search
                        onChange={this.handleInputChange}
                        value={this.state.searchInputValue}
                    />

                        <Tabs>
                            <Tab label="Lebensmittel" className={this.state.tab === "Food" ? "on" : ""} onClick={() => this.tabChangeHandler(1)} />
                            <Tab label="Getränke" className={this.state.tab === "Drink" ? "on" : ""} onClick={() => this.tabChangeHandler(2)} />
                        </Tabs>


                    {this.renderCatalog(this.state.tab)}
                </Container>
            </CustomerLaylout>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        catalog: state.customerCatalog.catalog,
        basket: state.basket.baskets,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSupplierCatalog: (payload) =>
            dispatch(actions.fetchSupplierCatalog(payload)),
        addItemToBasket: (payload) =>
            dispatch(actions.addItemToBasket(payload)),
        flush: () => dispatch(actions.flushSupplierCatalog())
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(CatalogCustomer);
