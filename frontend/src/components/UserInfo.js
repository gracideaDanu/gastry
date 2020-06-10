import React from "react";

const UserInfo = (props) => {
    const { user, onEdit } = props; 
    return (
        <div className="card mb-5">
            <h3 className="card-header">User Information</h3>
            <ul className="list-group">
                <li className="list-group-item"> Company: {user.company} </li>
                <li className="list-group-item"> Street: {user.address.street} </li>
                <li className="list-group-item"> City: {user.address.city} </li>
                <li className="list-group-item"> State: {user.address.state} </li>
                <li className="list-group-item"> Postcode: {user.address.code} </li>
            </ul>
            <button onClick={onEdit}>Edit profile</button>
        </div>
    );
};

export default UserInfo;
