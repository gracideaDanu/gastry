import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Item = (props) => {
    const pStyle= {
        height: '100%',
        marginBottom:'0px',
    }
    const pStyleName ={
        height: '100%',
        marginBottom:'0px',
        fontFamily: "Aleo-bold, sans-serif",
        fontWeight: "bold",
        space: "nowrap"
    }
    return (
        <>
            <Row>
                <Col>
                    <p style={pStyleName} >
                        {props.name}
                    </p>
                </Col>
            </Row>
            <Row >
                <Col xs={6}>
                    <p style={pStyle}>
                        {props.size}
                    </p>
                </Col>
                <Col xs={6}>
                    <p style={pStyle}>
                        {props.price}  €
                    </p>
                </Col>
            </Row>
        </>

    );
};

export default Item;