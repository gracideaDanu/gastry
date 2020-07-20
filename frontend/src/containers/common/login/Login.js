import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

import logo from "../../../assets/icons/login-logo.svg";
import Button from "../../../components/button/Button";
import Input from "../../../components/auth/Input";

import "./Login.css";

const signInState = {
    form: {
        email: {
            name: "E-Mail",
            value: "",
            type: "email",
        },
        password: {
            name: "Password",
            value: "",
            type: "password",
        },
    },
    errors: {},
};

export class Login extends Component {
    state = signInState;

    componentDidMount() {
        if (this.props.token !== null) {
            this.props.history.push("/home");
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.token !== null) {
            this.props.history.push("/home");
            this.props.fetchUser(this.props.userId);
        }
    }

    componentWillUnmount() {
        console.log("I unmounted login");
        this.props.loginFlush();
    }

    onSubmit = (event) => {
        event.preventDefault();
        const loginData = {
            email: this.state.form.email.value,
            password: this.state.form.password.value,
        };
        this.props.login(loginData);
    };

    onChange = (event) => {
        const value = {
            ...this.state.form,
            [event.target.type]: {
                ...this.state.form[event.target.type],
                value: event.target.value,
            },
        };

        this.setState({ form: value });
    };

    render() {
        const formArray = [];
        for (let key in this.state.form) {
            formArray.push({
                type: this.state.form[key].type,
                name: this.state.form[key].name,
            });
        }

        const signInForm = formArray.map((element) => (
            <Input
                type={element.type}
                key={element.type}
                name={element.name}
                change={(e) => this.onChange(e)}
            />
        ));

        return (
            <div className="login-container">
                <div className="logo"></div>
                <p className="welcome-msg">
                    Herzlich Willkommen bei Gastry, <br />
                    Bestellen und Chatten. <br />
                    So einfach war deine Bestellung nie. <br />
                </p>
                {this.props.error ? (
                    <div className="errorMessage">
                        <h6 className="errorMessage">{this.props.error}</h6>
                    </div>
                ) : null}

                <form
                    onSubmit={this.onSubmit}
                    id="login-form"
                    className="login-form"
                >
                    {signInForm}
                </form>
                <div className="auth-buttons">
                    <Button
                        type="submit"
                        label="Login"
                        form="login-form"
                        className="button submit-btn"
                    />
                    <Link to="/register">
                        <Button
                            type="register"
                            label="Register"
                            className="register button yellow-btn"
                        />
                    </Link>
                </div>
                <div className="legal">
                    <Link>AGB |</Link>
                    <Link> Impressum |</Link>
                    <Link> Cookie</Link>
                </div>
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        error: state.auth.error,
        userId: state.auth.userId,
        token: state.auth.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (_id) => dispatch(actions.fetchUser(_id)),
        login: (data) => dispatch(actions.login(data)),
        loginFlush: () => dispatch(actions.loginFlush()),
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(Login);
