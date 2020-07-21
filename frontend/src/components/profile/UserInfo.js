import React from "react";

import Button from '../button/Button'

import "./UserInfo.css"

const UserInfo = (props) => {
    const { user, onEdit,onLogout } = props;
    return (
        <div className="user-info-container">
            <ul className="list">
                <li className="item"> Firma: {user.company} </li>
                <li className="item"> Straße: {user.address.street} </li>
                <li className="item"> Stadt: {user.address.city} </li>
                <li className="item"> Bundesland: {user.address.state} </li>
                <li className="item"> PLZ: {user.address.code} </li>
                {user.userType === "Supplier"
                    ? <li className="item"> Tag: {user.category} </li>
                    : null
                }
            </ul>
            <Button className="button yellow-btn" onClick={onEdit} label="Profil bearbeiten"/>
            <Button className="button red-btn logout-button" onClick={onLogout} label="Logout"/>
        </div>
    );
};

export default UserInfo;
