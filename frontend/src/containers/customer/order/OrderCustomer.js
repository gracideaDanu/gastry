import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../supplier/home/home.scss";
import * as actions from "../../../redux/actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import CustomerLayout from "../CustomerLayout";
import food from "../../../assets/icons/food.svg";
import drinks from "../../../assets/icons/drinks.svg";
import foodanddrinks from "../../../assets/icons/foodanddrinks.svg";
import "./orderCustomer.scss";
import {Fade} from "@material-ui/core";

class OrderCustomer extends Component {
    render() {
        return (
            <CustomerLayout
                className="container-fluid"
                description={`Was möchtest \n du bestellen?`}
                location={"home"}
            >
                <Fade in={true}>
                    <Row style={{width: "100%", height: "50%"}}>
                        <Col
                            className={"d-flex flex-column justify-content-center "}
                            style={{height: "100%", marginTop: "1em"}}
                        >
                            <Link
                                className="supplierLink"
                                to={{pathname: `suppliers/food`}}
                            >
                                <img
                                    src={food}
                                    width="150"
                                    height="150"
                                    alt={"Essen"}
                                    className={"align-self-center"}
                                />
                            </Link>
                            <p className={"supplierButtons text-center"}>Lebensmittel</p>
                        </Col>
                        <Col
                            className={"d-flex flex-column justify-content-center"}
                            style={{height: "100%", marginTop: "1em"}}
                        >
                            <Link
                                className="supplierLink"
                                to={{pathname: `suppliers/drinks/`}}
                            >
                                <img
                                    src={drinks}
                                    width="150"
                                    height="150"
                                    alt={"Getränke"}
                                    className={"align-self-center"}
                                />
                            </Link>
                            <p className={"supplierButtons text-center"}>Getränke</p>
                        </Col>
                    </Row>
                </Fade>
                <Fade in={true}>
                    <Row
                        style={{
                            width: "100%",
                            height: "50%",
                        }}
                    >
                        <Col
                            className={"d-flex flex-column justify-content-center "}
                            style={{height: "100%"}}
                        >
                            <Link
                                className="supplierLink"
                                to={{pathname: `suppliers/both/`}}
                            >
                                <img
                                    src={foodanddrinks}
                                    width="150"
                                    height="150"
                                    alt={"Essen und Getränke"}
                                    className={"align-self-center"}
                                />
                            </Link>
                            <p className={"supplierButtons text-center"}>
                                Beides
                            </p>
                        </Col>
                    </Row>
                </Fade>
            </CustomerLayout>
        );
    }
}

const mapsStateToProps = (state) => {
    return {
        suppliers: state.suppliersList.list,
        token: state.auth.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSupplier: (data) => dispatch(actions.fetchSuppliersList(data)),
    };
};

export default connect(mapsStateToProps, mapDispatchToProps)(OrderCustomer);
