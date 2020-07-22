import React, {Component} from 'react';
import * as actions from "../../../redux/actions";
import {connect} from 'react-redux'
import './Basket.css'
import Container from "react-bootstrap/Container";
import {Summary} from '../../../components/basket/Summary'
import EstimatedTotal from "../../../components/basket/EstimatedTotal";
import CustomerLayout from "../../customer/CustomerLayout";
import Button from "../../../components/button/Button";
import {Link} from "react-router-dom";
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import {Divider, SwipeableDrawer} from "@material-ui/core";
import truck from '../../../assets/icons/truck.svg'
import dust from '../../../assets/icons/smoke.svg'

export class Basket extends Component {
    state = {
        basket: [],
        total: 0,
        anchor: false
    }

    componentDidMount() {
        console.log(this.props.location)
        const basket = this.props.location.state.basket;

        let total = 0;
        for (let element of basket) {
            total += (element.price * element.amount)

        }
        this.setState({
            ...this.state,
            basket: basket,
            total: total
        });
        console.log(basket)


    }

    placeOrder = () => {
        let payload = {
            token: this.props.token,
            data: {
                products: this.state.basket,
                supplierId: this.props.location.state.supplierId,
                total: this.state.total
            },
        }
        this.props.placeOrder(payload)

        this.props.history.push("/finished", {
            order: true
        })

        console.log(this.state.basket)
    }
    toggleDrawer = (open) => (event) => {
        console.log("hi toggle");
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }


        this.setState({...this.state, anchor: open})

    };

    toggle = (open) => {
        this.setState({...this.state, anchor: open})

    }

    swipeToOrder = (props) => {
        return (
            <div className="bottom"
                 role="presentation"   >
                <div className="row centerRow">


                    <div className="col-7">
                        <h5>Bestellung aufgeben</h5>
                    </div>
                    <div className="col-5 sheet">
                        <button className="button red-btn" onClick={() => this.toggle(false)}>Abbrechen</button>
                    </div>
                </div>
                <Divider style={{marginBottom: "1rem"}}/>
                <h6 >Wische um die Bestellung aufzugeben</h6>
                <div>
                    <SwipeableList scrollStartThreshold={0.1} threshold={0.9} >
                        <SwipeableListItem

                            swipeRight={{
                                content: <div>Bestellung bestätigen ------------ <img src={dust} style={{'max-width': '2rem', 'transform':'scale(-1,1)'}}  /></div>,
                                action: () => this.placeOrder()
                            }}>  <img src={truck} style={{'max-width': '3rem'}} /> </SwipeableListItem>
                    </SwipeableList>
                </div>

            </div>

            )

    }

    render() {
        const basketItems = this.state.basket.map(element => {
                return (
                    <Summary key={element._id} item={element}/>

                )
            }
        )
        return (
            <CustomerLayout title="Basket"
                            location={"home"}
                            showBack={true}
                            description={"Mein Warenkorb"}
            >
                <Container>
                    {basketItems}
                    <EstimatedTotal total={this.state.total}/>
                    <React.Fragment key={"bottom"}>
                        <SwipeableDrawer style={{backgroundColor: "transparent"}}
                                         anchor={"bottom"}
                                         open={this.state.anchor}
                                         onClose={this.toggleDrawer( false)}
                                         onOpen={this.toggleDrawer( true)}
                        >
                            <div className="swipeWhite">
                                {this.swipeToOrder()}

                            </div>
                        </SwipeableDrawer>
                    </React.Fragment>


                    {
                        this.state.total > 0 ? <Button className={"button submit-btn"} onClick={()=>this.toggle(true)}
                                                       label={"Bestellung abschließen"}/> :
                            <p>Dein Warenkorb ist leer. Füge Produkte zum Warenkorb hinzu.</p>
                    }
                </Container>
            </CustomerLayout>


        )
    }

}

const mapsStateToProps = (state) => {
    return {
        token: state.auth.token
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        placeOrder: (data) => dispatch(actions.placeOrder(data))
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(Basket);
