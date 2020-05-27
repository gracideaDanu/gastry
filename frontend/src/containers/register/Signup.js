import "./Signup.css";
import React, { Component } from "react";
import {connect} from "react-redux"
import Input from "../../components/auth/input";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import * as actions from "../../redux/actions";

const signUpCState = {
    form: {
        restaurant: {
            value: "",
            type: "restaurant",
            name: "Restaurant name"
        },

        firstName: {
            value: "",
            type: "firstName",
            name: "First Name"
        },
        lastName: {
            value: "",
            type: "lastName",
            name: "Last Name"
        },

        email: {
            value: "",
            type: "email"
        },
        password: {
            value: "",
            type: "password"
        },
        passwordConfirm: {
            value: "",
            type: "passwordConfirm",
        }



    },
    option: {
        value: "customer"
    },
    errors: {}

};

const signUpSState = {
    form: {
        company: {
            value: "",
            type: "company",
            name: "Company name"
        },

        firstName: {
            value: "",
            type: "firstName",
            name: "First Name"
        },
        lastName: {
            value: "",
            type: "lastName",
            name: "Last Name"
        },


        email: {
            value: "",
            type: "email"
        },
        password: {
            value: "",
            type: "password"
        },
        passwordConfirm: {
            value: "",
            type: "passwordConfirm",
        }

    },
    option: {
        value: "supplier"
    },
    errors: {}

};

class Signup extends Component {

    state = signUpCState;

    optionHandler = (value) => {
        if (value === "customer"){
            const state = signUpCState;
            this.setState(state)

        }
        else {
            const state = signUpSState;
            this.setState(state)
        }

    };

    onChange = (event,elementType) => {
        const value = {
            ...this.state.form,
            [elementType]: {
                ...this.state.form[elementType],
                value: event.target.value

            }
        };

        this.setState({form: value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.option);
        const option = this.state.option.value;

        let loginData = {
            email: this.state.form.email.value,
            password: this.state.form.password.value,
            password2: this.state.form.passwordConfirm.value,
            lastName: this.state.form.lastName.value,
            firstName: this.state.form.firstName.value,
            option: option
        };
        if (this.state.option.value === "supplier"){
            loginData["company"] = this.state.form.company.value
        }
        else {
            loginData["restaurant"] = this.state.form.restaurant.value

        }
        console.log(loginData)
        this.props.register(loginData);
    };

    render() {
        const formArray = [];
        for (let key in this.state.form) {
            formArray.push({
                type: this.state.form[key].type,
                name: this.state.form[key].name

            })
        }

        const signInForm = formArray.map(element => (
                <Input type={element.type}
                       name={element.name}
                       key={element.type}
                       content={this.state.form[element.type].value}
                       change={(e) => this.onChange(e,element.type)}

                />
        ));

        return (
            <div>

                <h3>Sign Up Page {this.state.option.value}</h3>
                <ToggleButtonGroup type="radio" name="registerToggle" onChange={this.optionHandler}>
                    <ToggleButton value="customer">Customer</ToggleButton>
                    <ToggleButton value="supplier">Supplier</ToggleButton>
                </ToggleButtonGroup>
                <form onSubmit={this.onSubmit}>
                    {signInForm}
                    <button type="submit">Submit</button>
                </form>
            </div>

        );
    }
}

const mapsStateToProps =(state) => {
    return{
        token:state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        register:(data) => dispatch(actions.register(data

       ))
    }
};

export default connect(mapsStateToProps,mapDispatchToProps)(Signup);
