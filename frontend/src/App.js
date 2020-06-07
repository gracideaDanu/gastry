import * as React from 'react';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import {Provider} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Container className="justify-content-md-center">
                        <Row>
                            <Col xs lg="2">1 of 3
                            </Col>
                            <Col md="auto">
                                <Routes/>
                            </Col>
                            <Col xs lg="2">3 of 3
                            </Col>
                        </Row>
                    </Container>
                </BrowserRouter>
            </Provider>
        );
    };
};

export default App;