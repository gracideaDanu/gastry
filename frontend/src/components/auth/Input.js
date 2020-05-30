import React from "react";

const Input = (props) => {

    let form = {
        type: null,
        placeholder: null,
        label: null,
        name: null
    };

    switch (props.type) {
        case "password":
            form.type = "password";
            form.label = props.name;
            form.placeholder = "Please enter Password";

            break;
        case "email":
            form.type = "email";
            form.placeholder = "Please enter E-Mail";
            form.label = props.name;
            break;


        default:
           form.type = "text";
           form.placeholder = "Please enter " + props.name;
           form.label = props.name;
    }

    return (
        <div className="form-group">
            <label>{form.label}</label>
            <input onChange={props.change} type={form.type} className="form-control" placeholder={form.placeholder} data-test={'inputfield'}/>
        </div>
    );
};

export default Input;
