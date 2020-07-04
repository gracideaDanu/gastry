import React from "react";

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
            <button className="button" onClick={onEdit}>Edit profile</button>
        </div>
    );
};

export default UserInfo;
