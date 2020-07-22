import React from "react";

import Button from '../button/Button'

import "./UserInfo.css"

const UserInfo = (props) => {
    const { user, onEdit,onLogout } = props;
    const offer = (category) => {
        switch (category) {
            case "food": return "Lebensmittel";
            case "drinks": return "Getränke";
            case "both": return "Beides"
        }
    };
    return (
        <div className="user-info-container">
            <ul className="list">
                <li className="item"> Firma: {user.company} </li>
                <li className="item"> Straße: {user.address.street} </li>
                <li className="item"> Stadt: {user.address.city} </li>
                <li className="item"> Bundesland: {user.address.state} </li>
                <li className="item"> PLZ: {user.address.code} </li>
                {user.userType === "Supplier"
                    ? <li className="item"> Angebot: {offer(user.category)} </li>
                    : null
                }
            </ul>
            <Button className="button yellow-btn" onClick={onEdit} label="Profil bearbeiten"/>
            <Button className="button red-btn logout-button" onClick={onLogout} label="Logout"/>
        </div>
    );
};

export default UserInfo;
