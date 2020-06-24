import React, { Component } from "react";
import UserLayout from "../CustomerLayout";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";
import UserInfo from "../../../components/profile/UserInfo";
import UserInfoForm from "../../../components/profile/UserInfoForm";

class Profilepage extends Component {
    state = {
        form: {
            company: "",
            address: {
                street: "",
                city: "",
                state: "",
                code: "",
            },
        },
        canEdit: false,
    };

    userInfo = () => {
        const { user } = this.props.user;
        if (user) {
            return <UserInfo user={user} onEdit={this.onEdit} />;
        }
    };

    userInfoForm = () => {
        return (
            <UserInfoForm
                onChange={this.onChange}
                onChangeAddress={this.onChangeAddress}
                onSubmit={this.onSubmit}
                form={this.state.form}
            />
        );
    };

    onChange = (e) => {
        const form = {
            ...this.state.form,
            [e.target.name]: e.target.value,
        };

        this.setState({ form: form });
    };

    onChangeAddress = (e) => {
        const form = {
            ...this.state.form,
            address: {
                ...this.state.form.address,
                [e.target.name]: e.target.value,
            },
        };

        this.setState({ form: form });
    };

    onEdit = () => {
        this.props.fetchUser(this.props.userId);
        const { user } = this.props.user;
        let form = {
            ...this.state.form,
            company: user.company,
            address: {
                ...this.state.form.address,
                street: user.address.street,
                city: user.address.city,
                state: user.address.state,
                code: user.address.code,
            },
        };
        this.setState({ form: form, canEdit: true });
    };

    onSubmit = (e) => {
        e.preventDefault();
        try {
            this.props.updateUser(this.props.userId, this.state.form);
            this.props.fetchUser(this.props.userId);
            this.setState({ canEdit: false });
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount = () => {
        this.props.fetchUser(this.props.userId);
    };

    render() {
        return (
            <UserLayout
                className="container-fluid"
                title={"Profile"}
                description="Update Profile"
            >
                {this.state.canEdit ? this.userInfoForm() : this.userInfo()}
            </UserLayout>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        user: state.user,
        userId: state.auth.userId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (_id) => dispatch(actions.fetchUser(_id)),
        updateUser: (_id, formValues) => dispatch(actions.updateUser(_id, formValues)),
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(Profilepage);
