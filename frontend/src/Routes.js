import React, {Component} from 'react';
import Login from "./containers/login/Login";
import { Switch, Route, withRouter} from 'react-router-dom';
import OrderCustomer from "./containers/order/OrderCustomer";
import Notfound from "./containers/error/Notfound";
import Search from "./containers/search/Search";
import Profilepage from "./containers/profile/Profilepage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import Signup from "./containers/register/Signup";
import Catalog from "./containers/catalogSupplier/Catalog";
import HomeSupplier from "./containers/home/HomeSupplier";
import Supplierlist from "./containers/order/Supplierlist";
import Chat from "./containers/chat/chat";


class Routes extends Component {


    componentDidMount() {
        if (this.props.location.pathname === "/"){
            if (this.props.token !== null) {

                this.props.history.push("/home");
            }
            else {
                this.props.history.push("/login")
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if ( prevProps.token !== this.props.token && this.props.token === null){
            this.props.history.replace("/login");
        }
        if ( prevProps.token !== this.props.token && this.props.token !== null){
            this.props.history.replace("/home");
        }


    }

    //TODO : ask for authtoken and redirect to login if necessary



    render() {
        const privateRoutes = [];
        if (this.props.token !== null && this.props.user!==null) {
            if(this.props.user.userType === "Customer") {
                privateRoutes.push(<Route exact path={"/home"} component={OrderCustomer}></Route>)
                privateRoutes.push(<Route exact path={"/home/searchSuppliers"} component={Supplierlist}></Route>)
                privateRoutes.push(<Route exact path={"/search"} component={Search}></Route>)
                privateRoutes.push(<Route exact path={"/profile"} component={Profilepage}></Route>)
                privateRoutes.push(<Route exact path={"/chat"} component={Chat}></Route>)

            }
            else if(this.props.user.userType === "Supplier") {
                privateRoutes.push(<Route exact path={"/home"} component={HomeSupplier}></Route>)
                privateRoutes.push(<Route exact path={"/search"} component={Search}></Route>)
                privateRoutes.push(<Route exact path={"/profile"} component={Profilepage}></Route>)
                privateRoutes.push(<Route exact path={"/catalogSupplier"} component={Catalog}></Route>)
            }


        }
        return (
            <>
                <Switch>

                    { /* Routes requiring login */}
                    {privateRoutes}
                    <Route exact path={"/login"} component={Login}/>
                    <Route exact path={"/register"} component={Signup}/>

                    { /* Catch all route */}
                    <Route path="/*" component={Notfound} status={404}/>
                </Switch>
            </>
        );
    }


};


const mapsStateToProps =(state) => {
    return{
        token:state.auth.token,
        user: state.user.user
    }
}

export default withRouter(connect(mapsStateToProps)(Routes));
