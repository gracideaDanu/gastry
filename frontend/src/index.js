import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './components/navigation/Navigation'
import Routes from "./Routes";
import Provider from "react-redux/lib/components/Provider";
import store from "./redux/store";

ReactDOM.render(<Provider store={store}><Routes/></Provider>, document.querySelector('#root'))

