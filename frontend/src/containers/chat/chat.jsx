import React, {Component} from 'react';
import CustomerLayout from "../common/CustomerLayout";
import Chatmessage from "../../components/chat/Chatmessage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Chat extends Component {

    render() {
        return (
            <CustomerLayout>
                <Container>
                    <Row className={"justify-content-end"}>
                        <Chatmessage/>
                    </Row>
                    <Row className={"justify-content-end"}>
                        <Chatmessage/>
                    </Row>
                    <Row className={"justify-content-end"}>
                        <Chatmessage/>
                    </Row>
                    <Row className={"justify-content-end"}>
                        <Chatmessage/>
                    </Row>
                </Container>
            </CustomerLayout>
        );
    }
}

export default Chat;