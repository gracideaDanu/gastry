import React, {Component} from 'react';
import OwnChatMessage from "../../../components/chat/OwnChatMessage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "./chat.scss"
import Topbar from "../../../components/navigation/TopBar";
import OtherChatMessage from "../../../components/chat/OtherChatmessage";
import axiosInstance from "../../../redux/axiosInstance";
import io from "socket.io-client";
import {connect} from "react-redux";

let socket

class Chat extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.token)


    }

    componentDidMount() {
        this.setupSocket();
        axiosInstance.get('/chat')
            .then(res => {
                console.log(res)
            })
        this.setState({
            //messages: fetchChat
        })

    }

    setupSocket = () => {
        const token = this.props.token;
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

            newSocket.on('test', data => {
                console.log(data)
            });

            newSocket.on('new-Message', (data) => {

            })

            newSocket.on('accessChat', data => {
                console.log(data)
            });

            socket = newSocket;
        }
    };


    render() {
        return (
            <>
                <Topbar/>
                <Container>
                    <OwnChatMessage/>
                    <OtherChatMessage/>
                    <OwnChatMessage/>
                    <OtherChatMessage/>
                    <OwnChatMessage/>
                    <OtherChatMessage/>
                </Container>
                <Navbar expand={"*"} fixed={"bottom"}>
                    <Container>
                        <Form style={{width: "100%"}}>
                            <Row>
                                <Col xs={9}>
                                    <Form.Control type="text" placeholder="Type a message"/>
                                </Col>
                                <Col xs={3}>
                                    <Button variant="primary" type="submit">
                                        Send
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Navbar>
            </>
        );
    }
}


const mapsStateToProps = (state) => {
    return {
        token: state.auth.token

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //fetchChat:
    }
};


export default connect(mapsStateToProps, mapDispatchToProps)(Chat);
