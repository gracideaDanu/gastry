import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import SupplierCatList from "../../components/list/CatalogCustomerRow.js/CatalogCustomerRow";
import CustomerLaylout from "../common/CustomerLayout";
import {addItemToBasket} from "../../redux/actions";

let basketArray = [];
class CatalogCustomer extends Component {
    state = {
        basket: [],
        catalog: []

    }
    componentDidMount() {
        const { supplierId } = this.props.location.state;
        this.props.fetchSupplierCatalog(supplierId);
         if(this.props.basket !== null){
             basketArray = [...this.props.basket];
            let basketSingle = basketArray.find(basket => basket.supplierId === supplierId);
            let basketItems = [];
            basketSingle ? basketItems = [...basketSingle.basketItems] : basketItems = []
            console.log(basketItems);
            if(basketItems !== null){
                this.setState({
                    ...this.state,
                    basket: basketItems
            })
            }


        }

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.catalog !== this.props.catalog){
            this.setState({
                ...this.state,
                catalog: this.props.catalog
            })
        }
        this.findItemAmount("5eea44202681241ad4fd9c42");


    }
    addItemToBasketHandler = (event, itemId, option, amount) => {
        event.preventDefault();
        const { supplierId } = this.props.location.state;

        const catalog = [...this.state.catalog];
        let item = catalog.find(catItem => catItem._id === itemId );
        const basket = [...this.state.basket];
        let incrementItem = basket.find(element => item._id === element._id)
        if (incrementItem) {
            const index = basket.findIndex(element => element === incrementItem);
            let amount = incrementItem.amount;
            switch (option) {
                case 1: amount += 1;
                break;
                case 2: amount -= 1;
                break;


            }
            amount < 0 ? amount = 0 : amount = amount
            amount > 99 ? amount = 99 : amount = amount
            incrementItem = {
                ...incrementItem,
                amount: amount
            };
            amount === 0 ? basket.splice(index,1) : basket[index] = incrementItem


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



    };
    findItemAmount = (itemId) => {
        console.log("Hi")
        let amount;
        console.log(itemId);
        /*const { supplierId } = this.props.location.state;
        basketArray = this.props.basket.slice()
        let basketSingle = basketArray.find(basket => basket.supplierId === supplierId);
        let basketItems = [];
        basketSingle ? basketItems = [...basketSingle.basketItems] : basketSingle = []; basketSingle.basketItems = [];
        console.log(basketSingle.basketItems);
        let item = basketSingle.basketItems.find(items => items._id === itemId);
        item ? amount = item.amount : amount = 0;
        return amount;
        return 0*/
        let basket = [...this.state.basket];
        let item = basket.find(inc => inc._id === itemId);
        item ? amount = item.amount : amount = 0;
        console.log(amount);
        return amount;

    };

    renderCatalog = () => {
        if (this.props.catalog) {
            if (this.props.catalog.length === 0) {
                return <div>No Items Found</div>;
            }
            const catArray = this.props.catalog.map((item, index) => (
                <SupplierCatList
                    amount={this.findItemAmount(item._id)}
                    add={(e) => this.addItemToBasketHandler(e,item._id,1)}
                    subtract={(e) => this.addItemToBasketHandler(e,item._id,2)}
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
