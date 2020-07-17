import React, { Component } from "react";
import { connect } from "react-redux";

import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import * as actions from "../../../redux/actions";
import Errors from "../../../components/auth/error";
import Input from "../../../components/auth/Input";
import CustomButton from "../../../components/button/Button"

import "./Signup.css";

const signUpCState = {
    form: {
        restaurant: {
            value: "",
            type: "restaurant",
            name: "Restaurant name",
        },

        firstName: {
            value: "",
            type: "firstName",
            name: "First Name",
        },
        lastName: {
            value: "",
            type: "lastName",
            name: "Last Name",
        },

        email: {
            value: "",
            type: "email",
        },
        password: {
            value: "",
            type: "password",
        },
        passwordConfirm: {
            value: "",
            type: "passwordConfirm",
        },
    },
    option: {
        value: "customer",
    },
    errors: {
        restaurant: "Restaurant name is required",
        firstName: "First name is required",
        lastName: "Last name is required",
        email: "E-Mail is required",
        password: "Password is required",
        passwordConfirm: "Please confirm password",
    },
    exists: null,
    display: false
};

const signUpSState = {
    form: {
        company: {
            value: "",
            type: "company",
            name: "Company name",
        },

        firstName: {
            value: "",
            type: "firstName",
            name: "First Name",
        },
        lastName: {
            value: "",
            type: "lastName",
            name: "Last Name",
        },

        email: {
            value: "",
            type: "email",
        },
        password: {
            value: "",
            type: "password",
        },
        passwordConfirm: {
            value: "",
            type: "passwordConfirm",
        },
    },
    option: {
        value: "supplier",
    },
    errors: {
        company: "Company name is required",
        firstName: "First name is required",
        lastName: "Last name is required",
        email: "E-Mail is required",
        password: "Password is required",
        passwordConfirm: "Please confirm password",
    },
    exists: null,
    tag: "both",
    display: false
};

const validPasswordRegex = new RegExp(
    /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
);
const validEmailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const errorFormArray = [];
let mailTaken;
class Signup extends Component {
    state = signUpCState;

    componentDidMount() {
        if (this.props.token !== null) {
            this.props.history.replace("/home");
        }

        if (this.props.match.params.userType === "supplier") {
            this.setState(signUpSState)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.error !== this.props.error && this.props.error !== null) {
            this.setState({
                ...this.state,
                exists: this.props.error,
            });
        }
        if (this.props.error){
            mailTaken.scrollIntoView({behavior:"smooth"})
        }
    }

    validateForm = (errors) => {
        let valid = true;
        console.log(this.state.errors);

        Object.values(errors).forEach(
            // if we have an error string set valid to false
            (val) => console.log(val)
        );
        Object.values(errors).forEach(
            // if we have an error string set valid to false
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    };

    displayErrors = () => {
        errorFormArray.length = 0;
        for (let element in this.state.errors) {
            errorFormArray.push({
                value: this.state.errors[element],
            });
        }
        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                display: true,
            },
        });
        this.setState({
            ...this.state,
            display: true
        })
    };

    getOffer = (event) => {
        event.preventDefault();
        let tag;
        const value = event.target.value;
        switch (value) {
            case "Food":
                tag = "food";
                break;
            case "Drinks":
                tag = "drinks";
                break;
            case "Both":
                tag = "both";
                break;
        }
        this.setState({
            ...this.state,
            tag: tag,
        });
    };

    validationHandler = (elementType, value) => {
        let errors = this.state.errors;
        switch (elementType) {
            case "restaurant":
                errors.restaurant =
                    value.length < 2
                        ? "Restaurant must be 2 characters long!"
                        : "";
                break;

            case "company":
                errors.company =
                    value.length < 2
                        ? "Company must be 2 characters long!"
                        : "";
                break;

            case "firstName":
                errors.firstName =
                    value.length < 1 ? "First Name is required!" : "";
                break;
            case "lastName":
                errors.lastName =
                    value.length < 1 ? "Last Name is required!" : "";
                break;
            case "email":
                errors.email = validEmailRegex.test(value)
                    ? ""
                    : "Email is not valid!";
                break;
            case "password":
                console.log(value);
                errors.password = validPasswordRegex.test(value)
                    ? ""
                    : "Password needs to contain at least one letter and one number and 6 characters!";


                break;

            case "passwordConfirm":
                errors.passwordConfirm =
                    this.state.form.password.value !== value
                        ? "Passwords must match"
                        : "";
                break;
            default:
                break;
        }
        console.log(errors);
        this.setState({
            ...this.state,
            errors: errors,
        });
    };

    onChange = (event, elementType) => {
        event.preventDefault();
        const value = event.target.value;
        this.validationHandler(elementType, value);

        const form = {
            ...this.state.form,
            [elementType]: {
                ...this.state.form[elementType],
                value: event.target.value,
            },
        };

        this.setState({ form: form });
    };

    onSubmit = (event) => {
        event.preventDefault();
        const option = this.props.match.params.userType;
        if (this.validateForm(this.state.errors)) {
            console.info("Valid Form");
            let loginData = {
                email: this.state.form.email.value,
                password: this.state.form.password.value,
                password2: this.state.form.passwordConfirm.value,
                lastName: this.state.form.lastName.value,
                firstName: this.state.form.firstName.value,
                option: option,
            };
            if (option === "supplier") {
                loginData["company"] = this.state.form.company.value;
                loginData["tag"] = this.state.tag;
            } else {
                loginData["company"] = this.state.form.restaurant.value;
            }
            errorFormArray.length = 0;
            this.setState({
                ...this.state,
                errors: {
                    ...this.state.errors,
                    display: false,
                },
            });

            this.props.register(loginData);
            this.props.fetchUser(this.props.userId);
        } else {
            console.error("Invalid Form");
            console.log(this.state.errors);
            this.displayErrors();
        }
    };

    render() {
        const formArray = [];
        for (let key in this.state.form) {
            formArray.push({
                type: this.state.form[key].type,
                name: this.state.form[key].name,
            });
        }

        const signupForm = formArray.map((element) => (
            <Input
                type={element.type}
                name={element.name}
                key={element.type}
                content={this.state.form[element.type].value}
                change={(e) => this.onChange(e, element.type)}
            />
        ));

        const errorDisplay = errorFormArray.map((error) => (
            <Errors value={error.value} />
        ));
        
        return (
            <div className="signup-container">
            <h3 ref={(el) => {mailTaken = el}} className="signup-msg">Sag uns <br/> wer du bist</h3>
                {this.state.exists ? <div  className="errorMessage"> <h4 className="errorMessage">{this.props.error}</h4> </div>  : null}
                <form onSubmit={this.onSubmit} className="signup-form">
                    {signupForm}
                    {this.props.match.params.userType === "supplier" ? (
                        
                        <label className="form-options-label">
                            <select className="form-options" defaultValue="0" onChange={(e) =>this.getOffer(e)}>
                                <option value="0" disabled>What do you offer?</option>
                                <option value="Food">Food</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Both">Both</option>
                            </select>
                        </label>
                        
                    ) : null}
                    <CustomButton type="submit" label="Register" className="button yellow-btn"/>
                </form>

            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        token: state.auth.token,
        error: state.reg.error,
        userId: state.auth.userId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (data) => dispatch(actions.register(data)),
        fetchUser: (_id) => dispatch(actions.fetchUser(_id)),
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(Signup);
