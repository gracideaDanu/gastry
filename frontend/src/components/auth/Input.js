import React from "react";
import "./Input.css";

const Input = (props) => {
    let form = {
        type: null,
        placeholder: null,
        name: null,
        stateType: null,
    };

    switch (props.type) {
        case "password":
            form.stateType = props.type;
            form.type = "password";
            form.placeholder = "Password";
            break;

        case "passwordConfirm":
            form.stateType = props.type;
            form.type = "password";
            form.placeholder = "Password";
            break;
        case "email":
            form.stateType = props.type;
            form.type = "email";
            form.placeholder = "E-Mail";
            break;

        default:
            form.stateType = props.type;
            form.type = "text";
            form.placeholder = props.name;
    }

    return (
        <div>
            <div className={ (props.error === "" && !props.display) | !props.display ? "setMarginRL" : "unsetMarginRL"}>

            <input
            onChange={props.change}
            type={form.type}
            className="form-input"
            placeholder={form.placeholder}
            value={props.content}
        />


            </div>
            {props.display ? <div className="errorMessage">
                <p>{props.error}</p>
            </div> : null }

        </div>

    );
};

export default Input;
