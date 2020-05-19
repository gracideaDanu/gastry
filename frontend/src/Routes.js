import React, {useEffect} from 'react';
import Login from "./containers/login/Login";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from "./containers/home/Home";
import Notfound from "./containers/error/Notfound";
import store from "./redux/store";
import Search from "./containers/search/Search";
import Navigation from "./components/navigation/Navigation";
import Profilepage from "./containers/profile/Profilepage";


const Routes = () => {

    //TODO : ask for authtoken and redirect to login if necessary
    let loggedIn = false;


    return (
        <>
            <Navigation></Navigation>
            <BrowserRouter>
                {loggedIn && <Redirect to='/login'/>}

                <Switch>

                    { /* Routes requiring login */}
                    <Route exact path={"/"} component={Home}></Route>
                    <Route exact path={"/home"} component={Home}></Route>
                    <Route exact path={"/search"} component={Search}></Route>
                    <Route exact path={"/profile"} component={Profilepage}></Route>


                    <Route path="login" component={Login}/>

                    { /* Catch all route */}
                    <Route path="/*" component={Notfound} status={404}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default Routes;