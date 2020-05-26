import React, {useEffect, useState} from 'react';
import Layout from "../common/Layout";
import {Link} from "react-router-dom";
import UserLayout from "../common/UserLayout";


const Profilepage = (props) => {
    const [email] = useState([]);
    const [name] = useState([]);


    const token = true;

    const init = (userId, token) => {
        //TODO: get token

    }

    useEffect(() => {
        init( token)
    })


    const userInfo = () => {
        return (
            <div className='card mb-5'>
                <h3 className='card-header'>User Information</h3>
                <ul className='list-group'>
                    <li className='list-group-item'> {name} </li>
                    <li className='list-group-item'> {email} </li>
                </ul>
            </div>
        )
    }

    return (
        <UserLayout
            className='container-fluid'
            title={`${name} Profile Page`}
            description='Update Profile'
        >
            <h2 className='mb-4'>Profile Update</h2>
        </UserLayout>
    );
};

export default Profilepage;
