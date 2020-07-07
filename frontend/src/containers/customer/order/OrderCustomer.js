import React, {useState, useEffect, Component} from 'react';
import SupplierLayout from '../../supplier/SupplierLayout';
import UserLayout from "../CustomerLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../supplier/home/home.scss"
import Button from "react-bootstrap/Button";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import * as actions from "../../../redux/actions";
import {connect} from "react-redux";
import CustomerLayout from "../CustomerLayout";
import food from "../../../assets/icons/food.svg";
import drinks from "../../../assets/icons/drinks.svg";
import foodanddrinks from "../../../assets/icons/foodanddrinks.svg";
import basket from "../../../assets/icons/Warenkorb.svg";
import {LinkContainer} from "react-router-bootstrap";


class OrderCustomer extends Component {


    onSubmit = async (event, id) => {
        event.preventDefault();
        const payload = {
            token: this.props.token,
            data: {
                category: id
            }
        };
        console.log(payload);
        console.log("called");
        await this.props.fetchSupplier(payload);
        console.log(this.props.suppliers)
        if (this.props.suppliers != null) {
            this.props.history.replace('/home/suppliers')
        }
    };

    render() {
        return (
            <CustomerLayout
                className='container-fluid'
                title='OrderCustomer Page'
                description='Was möchtest du bestellen ?'
                location={"home"}
            >
                <Row style={{width: "100%", height: "100%"}}>
                    <Col className={"d-flex flex-column justify-content-center "} style={{height: "100%",marginTop: "5em"}}>
                        <Button type={"button"} onClick={(e) => this.onSubmit(e, "food")}>
                            <img
                                src={food} width="150" height="150" alt={"food"} className={"align-self-center"}
                            />
                        </Button>
                        <p style={{textAlign: "center"}}>Food</p>
                    </Col>
                    <Col className={"d-flex flex-column justify-content-center"} style={{height: "100%",marginTop: "5em"}}>
                        <Button type={"button"} onClick={(e) => this.onSubmit(e, "drinks")}>
                            <img
                                src={drinks} width="150" height="150" alt={"drinks"} className={"align-self-center"}
                            />
                        </Button>
                        <p style={{textAlign: "center"}}>Drinks</p>
                    </Col>
                </Row>
                <Row style={{width: "100%", height: "50%"}}>
                    <Col className={"d-flex flex-column justify-content-center "} style={{height: "100%"}}>
                        <Button type={"button"} onClick={(e) => this.onSubmit(e, "foodandDrinks")}>
                            <img
                                src={foodanddrinks} width="150" height="150" alt={"foodAndDrinks"}
                                className={"align-self-center"}
                            />
                        </Button>
                        <p style={{textAlign: "center"}}>Food and Drinks</p>
                    </Col>
                </Row>
            </CustomerLayout>
        )
    }


}

const mapsStateToProps = (state) => {
    return {
        suppliers: state.suppliersList.list,
        token: state.auth.token
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSupplier: (data) => dispatch(actions.fetchSuppliersList(data))
    }
};


export default connect(mapsStateToProps, mapDispatchToProps)(OrderCustomer);
