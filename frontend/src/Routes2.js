import React, {useEffect} from 'react';
import Route from "react-router/modules/Route";
import App from "./components/App";
import Login from "./components/login/Login";
import BrowserRouter from "react-router-dom/modules/BrowserRouter";
import Home from "./components/home/Home";
import Notfound from "./components/error/Notfound";
import Redirect from "react-router/modules/Redirect";
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import store from "./store";


const Routes = () => {

    let loggedIn= false;

    const requireLogin = (nextState, replace, cb) => {
        function checkAuth() {
            const { auth: { user }} = store.getState();
            if (!user) {
                // oops, not logged in, so can't be here!
                replace('/');
            }
            cb();
        }

        if (!isAuthLoaded(store.getState())) {
            store.dispatch(loadAuth()).then(checkAuth);
        } else {
            checkAuth();
        }
    };


    return (
        <BrowserRouter>
            {!loggedIn && <Redirect to='/login'/>}

            { /* Routes requiring login */}
            <Route /*onEnter={requireLogin}*/>
                <Route path={"/"} component={App}>
                    { /* home (main) route */}
                    <Route component={Home}/>
                    { /* Routes */}

                </Route>
            </Route>
            <Route path="login" component={Login}/>

            { /* Catch all route */}
            <Route path="*" component={Notfound} status={404}/>

        </BrowserRouter>
    );
};

export default Routes;