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
let socket;
let messagesEnd;
class Chat extends Component {

    state = {
        chatId: 0,
        order: {},
        messages: [],
        pendingMessage: "",
        typeError: "",
        userId: ""
    };


    constructor(props) {
        super(props);
        console.log(this.props.token)

    }

    componentDidMount() {
        this.setupSocket();
        const token = this.props.token;
        const order = this.props.location.state.order
        const userId = this.props.user._id;
        const chatId = order.chat_id;
        console.log(chatId);
        this.props.fetchChat({
            token: token,
            chatId: chatId
        });
        console.log(order);

        this.setState({
            ...this.state,
            order: order,
            userId: userId
        });

        this.fetchChat();

        this.scrollToBottom();




    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollToBottom()
    }

    componentWillUnmount() {
        this.props.flush();
    }


    newMessage = (message) => {
        const userId = this.state.userId;
        try {
            console.log("Try")
            socket.emit("newMessage", {
                message: message,
                userId: userId
            })
            console.log("try finished")
        } catch (e) {
            console.log("catch oh no")

            socket = null;
            this.setupSocket()
            socket.emit("newMessage", {
                message: message,
                userId: userId
            })
        }


    };

    fetchChat = () => {
        const order = this.props.location.state.order;
        const chatId = order.chat_id;
        try {
            console.log("in try block")
            socket.emit("fetchChat", {
                chatId: chatId
            });
            console.log("in try finished")

        }catch (e) {
            console.log("catch oh no")
            socket = null;
            this.setupSocket();
            socket.emit("fetchChat", {
                chatId: chatId
            });

        }

    };

    setupSocket = () => {
        const order = this.props.location.state.order;
        const chatId = order.chat_id;
        const token = this.props.token;
        if (token && !socket) {
            const newSocket = io("http://localhost:4000", {
                query: {
                    token: token,
                    chatId: chatId
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
                console.log("fetch frontend faster")
                const messages = chat.messages.reverse();
                this.setState({
                    ...this.state,
                    messages: messages,
                    chatId: chat._id
                })
                console.log("fetch frontend faster")
            });

            newSocket.on("newMessage", data => {
                console.log("IM A NEW MESSAGE");
              const newMessage = data.newMessage;
              const messages = [...this.state.messages];
              console.log("HOI ON NEW FRONT")
              console.log(newMessage.message);
              console.log(newMessage.dateNow);
              messages.push(newMessage);
              this.setState({
                  ...this.state,
                  messages: messages,
                  pendingMessage: ""
              })
            });

            socket = newSocket;
        }
    };

    onChangeMessageHandler = (event) => {
        event.preventDefault()
        const message = event.target.value;
        console.log(message)
        this.validationHandler(message)


    };

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
       if(message.length === 0) {
           this.setState({
               ...this.setState({
                   ...this.state,
                   pendingMessage: message,
                   typeError: "Message must not be empty"
               })
           })
       }
       else {
           this.setState({
               ...this.setState({
                   ...this.state,
                   pendingMessage: message,
                   typeError: ""
               })
           })
       }




    };

    submitMessage = (event) => {
        event.preventDefault()
        if(this.validateForm(this.state.typeError)) {
            console.log(this.state.pendingMessage);
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
            this.newMessage(message)
        }
        else {
            console.log(this.state.typeError)

        }


    }

    renderMessages = () => {
        const messages = [...this.state.messages];
        const userId = this.state.userId;
        const messageUIElements = messages.map(message => {
            if(message.user === userId) {
                return <OwnChatMessage text={message.message} date={message.date}/>
            }
            else return <OtherChatMessage text={message.message} date={message.date}/>


        })
        return messageUIElements
    };

    scrollToBottom = () => {
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    };




    render() {
        return (
            <>
                <Topbar/>
                <Container className="Containerli">
                    {this.renderMessages()}
                    <div ref={(el) => {messagesEnd = el}}/>
                </Container>
                <Navbar expand={"*"} fixed={"bottom"}>
                    <Container>
                        <Form style={{width: "100%"}}>
                            <Row>
                                <Col xs={9}>
                                    <Form.Control value={this.state.pendingMessage} onChange={(e) => this.onChangeMessageHandler(e)}  type="text" placeholder="Type a message"/>
                                </Col>
                                <Col xs={3}>
                                    <button className="btn btn-primary" onClick={(e) => this.submitMessage(e)} >
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
        token: state.auth.token,
        user: state.user.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        postMessage: (payload) => dispatch(actions.postMessage(payload)),
        fetchChat: (payload) => dispatch(actions.fetchChat(payload)),
        flush: () => dispatch(actions.flushChat())
    }
};


export default connect(mapsStateToProps, mapDispatchToProps)(Chat);
