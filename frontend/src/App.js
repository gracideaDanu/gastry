import * as React from 'react';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import {Provider} from "react-redux";

class App extends React.Component{
    render() {
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <Routes/>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    };
};

export default App;