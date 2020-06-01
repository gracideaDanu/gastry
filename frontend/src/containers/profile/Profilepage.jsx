import React, {Component, useEffect, useState} from 'react';
import Layout from "../common/Layout";
import {Link} from "react-router-dom";
import UserLayout from "../common/UserLayout";


class Profilepage extends Component {


    userInfo = () => {
        return (
            <div className='card mb-5'>
                <h3 className='card-header'>User Information</h3>
                <ul className='list-group'>
                    <li className='list-group-item'> name </li>
                    <li className='list-group-item'> email </li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <UserLayout
                className='container-fluid'
                title={`name Profile Page`}
                description='Update Profile'
            >
                <h2 className='mb-4'>Profile Update</h2>
            </UserLayout>
        )
    };
};

export default Profilepage;
