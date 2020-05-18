import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import Routes from "./routes";
import Provider from "react-redux/lib/components/Provider";
import store from "./store";

ReactDOM.render(<Provider store={store}><Routes/></Provider>, document.querySelector('#root'))