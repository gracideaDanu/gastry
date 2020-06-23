import React, {useState, useEffect, Component} from 'react';
import SupplierLayout from '../common/SupplierLayout';
import UserLayout from "../common/CustomerLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../home/home.scss"
import Button from "react-bootstrap/Button";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";

class OrderCustomer extends Component{


    onSubmit = async (event,id) => {
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
        if(this.props.suppliers != null){
            this.props.history.replace('/home/suppliers')
        }
    };

    render() {
        return  (
            <UserLayout
                className='container-fluid'
                title='OrderCustomer Page'
                description='Was möchtest du bestellen ?'
            >
                <Row style={{width: "100%",height:"50%"}}>
                    <Col>
                        <Button type={"button"} onClick={(e)=> this.onSubmit(e,"food")}>
                            Food
                        </Button>
                    </Col>
                    <Col>
                        <Col>
                            <Button type={"button"} onClick={(e)=> this.onSubmit(e,"drinks")}>
                                Drinks
                            </Button>
                        </Col>
                    </Col>
                </Row>
                <Row style={{width: "100%",height:"50%"}}>
                    <Col>
                        <Button type={"button"} onClick={(e)=> this.onSubmit(e,"foodDrinks")}>
                            Food& Drinks
                        </Button>
                    </Col>
                </Row>

            </UserLayout>
        )
    }


}

const mapsStateToProps =(state) => {
    return{
        suppliers:state.suppliersList.list,
        token: state.auth.token
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        fetchSupplier:(data) => dispatch(actions.fetchSuppliersList(data))
    }
};


export default connect(mapsStateToProps,mapDispatchToProps)(OrderCustomer);
