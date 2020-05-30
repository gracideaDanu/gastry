import React, { Component } from "react";
import Input from "../../components/auth/Input";

const signUpState = {
    form: {
        firstName: {
            value: "",
            type: "First Name"
        },
        lastName: {
            value: "",
            type: "Last Name"
        },
        email: {
            value: "",
            type: "email"
        },
        password: {
            value: "",
            type: "password"
        },

    },
    errors: {}

};

class Signup extends Component {

    state = signUpState;

    render() {
        const formArray = [];
        for (let key in this.state.form) {
            formArray.push({
                type: this.state.form[key].type
            })
        }

        const signInForm = formArray.map(element => (
                <Input type={element.type}
                        key={element.type}/>
        ));

        return (
            <div>
                <h3>Sign Up Page</h3>
                <form>
                    {signInForm}
                    <button type="submit">Submit</button>
                </form>
            </div>

        );
    }
}

export default Signup;
