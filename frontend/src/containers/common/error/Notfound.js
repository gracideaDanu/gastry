import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../redux/actions";
class Notfound extends Component {

    componentDidMount() {
        //this.props.onClicklogout()
    }

    render() {
        return (
            <div>
                <h1>Shit.</h1>
            </div>
        )
    };
};
const mapsStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClicklogout: () => dispatch(actions.logout())
    }
}

export default connect(mapsStateToProps,mapDispatchToProps)(Notfound);