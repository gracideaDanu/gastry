import React, {Component, useEffect, useState} from 'react';
import SupplierLayout from "../common/SupplierLayout";
import {Link} from "react-router-dom";
import UserLayout from "../common/CustomerLayout";
import * as actions  from '../../redux/actions/index'
import {connect} from "react-redux";


class Profilepage extends Component {

    userInfo = () => {
        if (this.props.user.user) {
            return (
                <div className='card mb-5'>
                    <h3 className='card-header'>User Information</h3>
                    <ul className='list-group'>
                        <li className='list-group-item'> Name: {this.props.user.user.company} </li>
                        <li className='list-group-item'> Street: {this.props.user.user.address.street} </li>
                        <li className='list-group-item'> City: {this.props.user.user.address.city} </li>
                        <li className='list-group-item'> Postal Code: {this.props.user.user.address.code} </li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div className='card mb-5'>Loading</div>
            )
        }
    }

    componentDidMount = () => {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const company = this.props.user.user ? this.props.user.user.company : "loading"
        return (
            <UserLayout
                className='container-fluid'
                title={`${company}`}
                description='Update Profile'
            >
                {this.userInfo()}
                <h2 className='mb-4'>Profile Update</h2>
            </UserLayout>
        )
    };
};

const mapsStateToProps =(state) => {
    return{
        user: state.user,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUser:(data) => dispatch(actions.fetchUser(data))
    }
};

export default connect(mapsStateToProps, mapDispatchToProps)(Profilepage);
