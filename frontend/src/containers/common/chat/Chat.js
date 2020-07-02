import React, {Component} from 'react';
import io from "socket.io-client"
import * as actions from "../../../redux/actions";
import {connect} from "react-redux";
let socket
class Chat extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.token)

    }

    componentDidMount() {
        this.setupSocket();
        console.log("hi")
    }

    setupSocket = () => {
        const token = this.props.token
        if (token && !socket) {
            const newSocket = io("http://localhost:4000", {
                query: {
                    token: token
                },
            });

            newSocket.on("disconnect", () => {
                socket = null;
                console.log("Disconnected backend!")
            });

            newSocket.on("connect", () => {
                console.log("Connected frontend")
            });

            socket = newSocket;
        }
    };



    render() {
        return (
            <div>
                <p> This is the chat!</p>
            </div>
        );
    }
}

const mapsStateToProps =(state) => {
    return{
        token: state.auth.token
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
    }
};


export default connect(mapsStateToProps,mapDispatchToProps)(Chat);
