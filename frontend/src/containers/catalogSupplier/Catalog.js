import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from "../../redux/actions";
import SupplierLayout from "../common/SupplierLayout";
import SupplierCatListView from "../../components/list/SupplierCatListView";

class Catalog extends Component {

    componentDidMount() {
        console.log("I mounted ");
        if (this.props.items.length <= 0) {
            console.log("empty")
        }
        this.props.fetchCatalog({
            token: this.props.token
        });    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("I updated")
        if (this.props.items.length > 0) {
            console.log("Not empty:" + this.props.items[0].name)
        }
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
        }
        this.props.addItem(payload);

    }

    render() {
        return (
            <SupplierLayout>
                <div>
                    <SupplierCatListView itemlist={this.props.items}></SupplierCatListView>
                </div>
                <button onClick={this.addHardItem}> Add hardcoded Item Rice cake!</button>
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
        addItem: (payload) => dispatch(actions.addItemCatalog(payload))

    }
};

export default connect(mapsStateToProps, mapDispatchToProps)(Catalog);
