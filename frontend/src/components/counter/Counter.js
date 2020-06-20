import React from "react";

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counterBtn" onClick={props.countDown}>-</button>
            <input className="counterInput" type="text" size="1" onChange={props.onChange}></input>
            <button className="counterBtn" onClick={props.countUp}>+</button>
        </div>
    );
};

export default Counter;