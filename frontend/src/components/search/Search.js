import React, { Component } from "react";
import FormControl from "react-bootstrap/FormControl";

import "./Search.scss";

class Search extends Component {
    onChange = (e) => {
        this.props.onChange(e.target.value);
    };

    render() {
        return (
            <div className={"searchInput"}>
                <FormControl
                    type="text"
                    placeholder="Suchen..."
                    className="mr-sm-2"
                    onChange={this.onChange}
                    value={this.props.value}
                />
            </div>
        );
    }
}

export default Search;
