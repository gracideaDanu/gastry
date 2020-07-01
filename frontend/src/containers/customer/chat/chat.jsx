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

class Chat extends Component {

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

export default Chat;