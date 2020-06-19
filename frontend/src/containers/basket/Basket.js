import React, { Component} from 'react';
import SupplierLayout from '../common/SupplierLayout';
import UserLayout from "../common/CustomerLayout";
import * as actions from "../../redux/actions";
import {connect} from 'react-redux'

export class Basket extends Component {
    render() {
        return(
            <p>Hi Basket</p>
        )
    }
}

export default Basket
