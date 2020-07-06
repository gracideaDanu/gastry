import React from "react";

import Button from '../button/Button'

import "./UserInfo.css"

const UserInfo = (props) => {
    const { user, onEdit } = props; 
    return (
        <div className="user-info-container">
            <ul className="list">
                <li className="item"> Company: {user.company} </li>
                <li className="item"> Street: {user.address.street} </li>
                <li className="item"> City: {user.address.city} </li>
                <li className="item"> State: {user.address.state} </li>
                <li className="item"> Postcode: {user.address.code} </li>
                {user.userType === "Supplier"
                    ? <li className="item"> Tag: {user.category} </li>
                    : null
                }
            </ul>
            <Button className="button yellow-btn" onClick={onEdit} label="Edit Profile"/>
        </div>
    );
};

export default UserInfo;
