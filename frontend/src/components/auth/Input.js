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
        <input
            onChange={props.change}
            type={form.type}
            className="form-input"
            placeholder={form.placeholder}
            value={props.content}
        />
    );
};

export default Input;
