import React, {useEffect} from 'react';
import Route from "react-router/modules/Route";
import App from "./components/App";
import Login from "./components/login/Login";
import BrowserRouter from "react-router-dom/modules/BrowserRouter";


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
            {loggedIn && <Redirect to='/login'/>}

            <Route path="login" component={Login}/>

            { /* Routes requiring login */}
            <Route onEnter={requireLogin}>
                <Route path={"/"} component={App}>
                    { /* Home (main) route */}
                    <IndexRoute component={Home}/>
                    { /* Routes */}
                    <Route path="about" component={About}/>
                    <Route path="pagination" component={Pagination}/>

                    { /* Catch all route */}
                </Route>
            </Route>
            <Route path="*" component={NotFound} status={404}/>

        </BrowserRouter>
    );
};

export default Routes;