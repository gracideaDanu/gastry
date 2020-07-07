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
        typeError: ""
    }

    constructor(props) {
        super(props);
        console.log(this.props.token)


    }

    componentDidMount() {
        this.setupSocket();
        const token = this.props.token;
        const order = this.props.location.state.order
        const chatId = order.chat_id;
        console.log(chatId)
        this.props.fetchChat({
            token: token,
            chatId: chatId
        });
        console.log(order);

        this.setState({
            ...this.state,
            order: order
        })

        this.fetchChat();


    }

    fetchChat = () => {
        const order = this.props.location.state.order
        const chatId = order.chat_id;
        socket.emit("fetchChat", {
            chatId: chatId
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
            newSocket.on('fetchChat', data => {
                console.log(data);
                console.log("ON FETCH SOCKET")
                console.log(data.chat)
                const chat = data.chat;
                this.setState({
                    ...this.state,
                    messages: chat.messages,
                    chatId: chat._id
                })
            });

            socket = newSocket;
        }
    };

    onChangeMessageHandler = (event) => {
        event.preventDefault()
        const message = event.target.value;
        console.log(message)
        this.setState({
            ...this.state,
            pendingMessage: message
        })
        this.validationHandler(message)


    }

    validateForm = (err) => {
        let valid = true;
        console.log(err)
        if(err.length > 0) {
            return valid = false
        }
        else {
            return valid = true
        }
    };

    validationHandler = (message) => {
        console.log(message.length);
       if(message.length === 0) {
           this.setState({
               ...this.setState({
                   ...this.state,
                   typeError: "Message must not be empty"
               })
           })
       }
       else {
           this.setState({
               ...this.setState({
                   ...this.state,
                   typeError: ""
               })
           })
       }




    };

    submitMessage = (event) => {
        event.preventDefault()
        console.log("HI")
        if(this.validateForm(this.state.typeError)) {
            console.log("Hey im valid");
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
            this.fetchChat();
        }
        else {
            console.log(this.state.typeError)

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
