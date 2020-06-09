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
        this.props.fetchCat();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("I updated")
        if (this.props.items.length > 0) {
            console.log("Not empty:" + this.props.items[0].name)
        }
    }

    render() {
        return (
            <SupplierLayout>
                <div>
                    <SupplierCatListView itemlist={this.props.items}></SupplierCatListView>
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
        fetchCat: () => dispatch(actions.fetchCatalog(null))

    }
};

export default connect(mapsStateToProps, mapDispatchToProps)(Catalog);
