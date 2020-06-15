import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../../redux/actions";
import SupplierLayout from "../common/SupplierLayout";
import SupplierCatListView from "../../components/list/SupplierCatListView";
import Accordion from "react-bootstrap/Accordion";

const signUpSState = {
    form: {
        name: {
            value: "",
            type: "name",
            name: "Product name"
        },

        tags: {
            value: "",
            type: "tags",
            name: "Product tags"
        },
        size: {
            value: "",
            type: "size",
            name: "Size"
        },


        price: {
            value: "",
            type: "price"
        }

    },
    errors: {
        name: 'Product name is required',
        price: 'Product price is required',
        size: 'Product size is required',
        tags: 'Product tag is required'

    }

};

class Catalog extends Component {

    state = {
        catalog: [],
        errors: {},
        showModal: false
    }


    componentDidMount() {
        console.log("I mounted ");
        if (this.props.items.length <= 0) {
            console.log("empty")
        }

        this.props.fetchCatalog({
            token: this.props.token
        });


   }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("I updated")
        if (this.props.items.length > 0) {
            console.log("Not empty:" + this.props.items[0].name)
        }
        if(prevProps.items !== this.props.items){
            const items = this.props.items.reverse();
            this.setState({
                catalog: this.props.items
            })
        }


    }
    showModalHandler = () => {
        const modal = !this.state.showModal;
        this.setState({
            ...this.state,
            showModal: modal
        });
 }

    addHardItem = () => {
        const payload = {
            token: this.props.token,
            data: {
                name: "Rice cake",
                price: "5",
                size: "1kg",
                description: "Made out of rice",
                tags: "Food"
            }
        };
        this.props.addItem(payload);

    };
    validationHandler = (elementType, value) => {
        let errors = this.state.errors;
        console.log(value);
        console.log(elementType);
        switch (elementType) {
            case 'name':
                errors.name =
                    value.length < 2
                        ? 'Product name must be 2 characters long!'
                        : '';
                break;

            case 'size':
                errors.size =
                    value.length < 2
                        ? 'Product size must be 2 characters long!'
                        : '';
                break;

            case 'price':
                errors.price =
                    value.length < 1
                        ? 'Product price is required!'
                        : '';
                break;
            case 'tags':
                errors.tags =
                    value === "Food" || value === "Drink"
                        ? ''
                        : 'Product tags must either be "Food" or "Drink"';
                break;
            default:
                break;
        }
        console.log(errors);
        this.setState({
            ...this.state,
            errors: errors
        })
    }


    onChange = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target);
        console.log(event.target.parentElement);
        const index = event.target.parentElement.id;
        console.log(index);
        const property = event.target.name;
        console.log(property);
        const value = event.target.value;
        this.validationHandler(property,value);
        console.log(value);
        const catalog = this.state.catalog;
        catalog[index] = {
            ...catalog[index],
            [property]: value
        }
        this.setState({
            ...this.state,
            catalog: catalog
        })
    }







    ;

    render() {
        const catArray = this.state.catalog.map((item, index) =>
            (
            <SupplierCatListView index={index} showModal={this.state.showModal} modal={this.showModalHandler} change={(e) => this.onChange(e,index)} deleteHanlder={(event) => this.props.deleteItem({token: this.props.token, itemId: event.target.value})} item={item}></SupplierCatListView>

        ));
        return (
            <SupplierLayout>
                <div>
                        {catArray}
                    <button onClick={this.addHardItem}> Add hardcoded Item Rice cake!</button>

                </div>
            </SupplierLayout>
        );
    }
}


const mapsStateToProps = (state) => {
    return {
        token: state.auth.token,
        items: state.cat.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCatalog: (payload) => dispatch(actions.fetchCatalog(payload)),
        addItem: (payload) => dispatch(actions.addItemCatalog(payload)),
        deleteItem: (payload) => dispatch(actions.deleteItemCatalog(payload))

    }
};

export default connect(mapsStateToProps, mapDispatchToProps)(Catalog);
