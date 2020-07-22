import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import ticked from '../../../assets/icons/bestellungBestaetigung.svg'
import CustomerLayout from "../CustomerLayout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './OrderFinished.css'

class OrderFinished extends Component {

    state = {
        order: false
    }
    homeHandler = () => {
        this.props.history.replace("/home")
    }
    orderHandler = () => {
        this.props.history.replace("/orders")
    }
    componentDidMount() {

        const order = !!this.props.history.location.state
        this.setState({
            ...this.state,
            order: order
        })
    }

    render() {
        const picStyle = {
            'max-width': "8rem",
            'margin-bottom' : '2rem'
        }
        const spacing = {
            'margin': "1rem"
        }
        const height = {
            'background-color': "var(--secondary)",
            'min-height': "100vh",
            'padding': "10rem 0"
        }
        return (
            <div className="finished text-center" style={height}>
                {this.state.order ? <div className="row">
                    <div className="col-sm-auto text-center">             <img style={picStyle} src={ticked} alt="Order received" className="erhaltenKlein text-center" />
                    </div>
                    <div className="col-sm-12 text-center">             <h3>Bestellung erhalten</h3>
                    </div>
                    <div className="col-sm-12 text-center">                 <p>Deine Bestellung haben wir erfolgreich aufgenommen!</p>
                    </div>
                    <div className="col-sm-12 text-center">                 <p>Überprüfe deine Bestellungen, um einen Chat mit dem Lieferanten zu beginnen!</p>
                    </div>
                    <div className="col-sm-12 d-flex justify-content-between">  <button className="button yellow-btn" onClick={this.homeHandler} style={spacing}>Home</button>  <button onClick={this.orderHandler} style={spacing} className="button yellow-btn">Bestellungen</button></div>

                </div> : <div style={height}> <h3>Du hast keine Bestellung getätigt</h3>                     <div className="col-sm-12 d-flex justify-content-between">  <button className="button yellow-btn" onClick={this.homeHandler} style={spacing}>Home</button>  <button onClick={this.orderHandler} style={spacing} className="button yellow-btn">Bestellungen</button></div>
                </div> }




            </div>
        );
    }
}

export default OrderFinished;