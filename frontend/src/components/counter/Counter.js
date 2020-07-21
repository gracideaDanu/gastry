import React from "react";
import add from "../../assets/icons/PlusButtonAusgewählt.svg"
import remove from "../../assets/icons/decrease.svg"
import Col from "react-bootstrap/Col";
import "./Counter.css"

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counterBtn" onClick={props.countDown}>
                <img src={remove} width="25" height="25" alt={"reduzieren"}/>
            </button>
            <input type="number" maxLength="2" minLength="1" defaultValue="1" min="0" max="99" className="counterInput text-center" value={props.amount} type="text" size="1" onChange={(e) => props.onChange(e,props.itemId)} ></input>
            <button className="counterBtn" onClick={props.countUp}>
                <img src={add} width="25" height="25" alt={"erhöhen"}/>
            </button>
        </div>
    );
};

export default Counter;
