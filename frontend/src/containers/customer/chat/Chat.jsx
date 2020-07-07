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
import * as actions from '../../../redux/actions';


let socket

class Chat extends Component {

    state = {
        chatId: 0,
        order: {},
        messages: [],
        pendingMessage: "",
        error: ""
    }

    constructor(props) {
        super(props);
        console.log(this.props.token)


    }

    componentDidMount() {
        this.setupSocket();
        const token = this.props.token
        const order = this.props.location.state.order
        const chatId = order.chat_id;
        console.log(chatId)
        this.props.fetchChat({
            token: token,
            chatId: chatId
        })
        console.log(order);

        this.setState({
            ...this.state,
            order: order
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

            newSocket.on('fetchChat', data => {
                console.log(data)
                console.log("ON FETCH SOCKET")
                console.log(data.chat)
                const chat = data.chat;
                this.setState({
                    ...this.state,
                    messages: chat.messages,
                    chatId: chat._id
                })
            });
            newSocket.on('writeMessage', data => {
                console.log("ON Write SOCKET")
                const chat = data.chat;
                this.setState({
                    ...this.state,
                    messages: chat.messages
                })
            })

            socket = newSocket;
        }
    };

    onChangeMessageHandler = (event) => {
        event.preventDefault()
        const message = event.target.value;
        this.validationHandler(message)
        console.log(message)
        this.setState({
            ...this.state,
            pendingMessage: message
        })

    }

    validateForm = (error) => {
        let valid = true;
        console.log(error)
        error.length > 0
        ? valid = false
            : valid = true
        return valid;
    }

    validationHandler = (message) => {
        let error = ""
        console.log(message.length)
        message.length <= 0
        ? error = "Message must be at least one character long"
            : error = ""
        console.log(error + "validation live")
        console.log(error.length)
        this.setState({
            ...this.state,
            error: error
        })
    }

    submitMessage = (event) => {
        event.preventDefault()
        console.log("HI")
        if(this.validateForm(this.state.error)) {
            console.log("Hey im valid")
            const token = this.props.token;
            const message = this.state.pendingMessage;
            const chatId = this.state.order.chat_id
            this.props.postMessage({
                token: token,
                chatId: chatId,
                data: {
                    message: message
                }

            });
        }
        else {
            console.log(this.state.error)

        }


    }


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
                                    <Form.Control onChange={(e) => this.onChangeMessageHandler(e)}  type="text" placeholder="Type a message"/>
                                </Col>
                                <Col xs={3}>
                                    <button className="btn-primary" onClick={(e) => this.submitMessage(e)} >
                                        Send
                                    </button>
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
        postMessage: (payload) => dispatch(actions.postMessage(payload)),
        fetchChat: (payload) => dispatch(actions.fetchChat(payload))
    }
};


export default connect(mapsStateToProps, mapDispatchToProps)(Chat);
