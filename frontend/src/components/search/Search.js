import React, { Component } from "react";
import FormControl from "react-bootstrap/FormControl";

import "./Search.css";

class Search extends Component {

    onChange = (e) => {
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <FormControl type="text" placeholder="Search" className="mr-sm-2 searchInput" onChange={this.onChange} value={this.props.value}/>
        );
    }
}

export default Search;
