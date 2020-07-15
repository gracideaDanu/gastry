import React from "react";
import add from "../../assets/icons/productcatalogAusgewählt.svg"
import Col from "react-bootstrap/Col";
import "./Counter.css"

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counterBtn" onClick={props.countDown}>
                <img src={add} width="25" height="25" alt={"increase"}/>
            </button>
            <input className="counterInput text-center" value={props.amount} type="text" size="1" onChange={props.onChange} ></input>
            <button className="counterBtn" onClick={props.countUp}>
                <img src={add} width="25" height="25" alt={"increase"}/>
            </button>
        </div>
    );
};

export default Counter;
