import React from "react";
import goto from "../../assets/icons/next.svg";
import logo from "../../assets/icons/logo.svg";

import "./Supplier.scss";

const Supplier = (props) => {
    return (
        <div className="supplier-container">
            <img
                className={"supplier-logo"}
                src={logo}
                alt={props.name}
            />
            <div className="supplier-info">
                <p>{props.name}</p>
                <p>{props.address}</p>
            </div>
            <img
                className={"forward-icon"}
                src={goto}
                width="40"
                height="40"
                alt={"back"}
            />
        </div>
    );
};

export default Supplier;
