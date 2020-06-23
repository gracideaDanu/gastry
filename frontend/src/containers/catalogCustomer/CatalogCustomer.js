import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import SupplierCatList from "../../components/list/CatalogCustomerRow.js/CatalogCustomerRow";
import CustomerLaylout from "../common/CustomerLayout";
import {addItemToBasket} from "../../redux/actions";

class CatalogCustomer extends Component {
    state = {
        basket: [],
        catalog: []

    }
    componentDidMount() {
        const { supplierId } = this.props.location.state;
        this.props.fetchSupplierCatalog(supplierId);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.catalog !== this.props.catalog){
            this.setState({
                catalog: this.props.catalog
            })
        }
    }
    addItemToBasketHandler = (event, itemId) => {
        event.preventDefault();
        const { supplierId } = this.props.location.state;

        const catalog = [...this.state.catalog];
        let item = catalog.find(catItem => catItem._id === itemId );
        console.log(item);
        const basket = [...this.state.basket];
        let incrementItem = basket.find(element => item._id === element._id)
        if (incrementItem) {
            console.log("Duplicate, increment amount!")
            const index = basket.findIndex(element => element === incrementItem)
            const amount = incrementItem.amount + 1;
            incrementItem = {
                ...incrementItem,
                amount: amount
            }
            basket[index] = incrementItem

        }
        else {
            console.log("New item");
            item = {
                ...item,
                amount: 1
            }
            basket.push(item)
        }
        this.setState({
            ...this.state,
            basket: basket
        })
        this.props.addItemToBasket({
                basket: basket,
            supplierId: supplierId
        })
        console.log("HI PROPS")



    }

    renderCatalog = () => {
        if (this.props.catalog) {
            if (this.props.catalog.length === 0) {
                return <div>No Items Found</div>;
            }
            const catArray = this.props.catalog.map((item, index) => (
                <SupplierCatList
                    add={(e) => this.addItemToBasketHandler(e,item._id)}
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
        basket: state.basket.baskets
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSupplierCatalog: (payload) =>
            dispatch(actions.fetchSupplierCatalog(payload)),
        addItemToBasket: (payload) => dispatch(actions.addItemToBasket(payload))
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(CatalogCustomer);
