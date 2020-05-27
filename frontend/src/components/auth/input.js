import React from "react";

const input = (props) => {

    let form = {
        type: null,
        placeholder: null,
        label: null,
        name: null,
        stateType: null
    };

    switch (props.type) {
        case "password":
            form.stateType = props.type;
            form.type = "password";
            form.label = "Password";
            form.placeholder = "Please enter Password";
            break;

            case "passwordConfirm":
                form.stateType = props.type;

                form.type = "password";
            form.label = "Password Confirmation";
            form.placeholder = "Please confirm Password";

            break;
        case "email":
            form.stateType = props.type;
            form.type = "email";
            form.placeholder = "Please enter E-Mail";
            form.label = "E-Mail";
            break;


        default:
           form.stateType = props.type;
           form.type = "text";
           form.placeholder = "Please enter " + props.name;
           form.label = props.name;
    }

    return (
        <div className="form-group">
            <label>{form.label}</label>
            <input onChange={props.change} type={form.type} className="form-control" placeholder={form.placeholder} value={props.content} />
        </div>
    );
};

export default input;
