import React from "react";
import "../../../styles.css";
import Navigation from "../../../components/navigation/NavigationBottom";
import Topbar from "../../../components/navigation/TopBar";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import profileButton from "../../../assets/icons/ProfilButton.svg";
import addButton from "../../../assets/icons/add.svg";
import bestelleingangButton from "../../../assets/icons/Bestelleingang.svg";

import "./SupplierLayout.css";

const SupplierLayout = ({
    title = "Title",
    className,
    children,
    onClicklogout,
}) => {
    const navbuttons = [
        {
            picref: bestelleingangButton,
            name: "Bestelleingänge",
            link: "/home",
        },
        {
            picref: addButton,
            name: "Productkatalog",
            link: "/orders",
        },
        {
            picref: profileButton,
            name: "Profil",
            link: "/profile",
        },
    ];
    return (
        <>
            <Topbar onClick={onClicklogout} />
            <Navigation pagelist={navbuttons} />
            <Container fluid className={"h-100  d-flex flex-column"}>
                <Row>
                    <h3 className="page-title">{title}</h3>
                </Row>
                <Row className={"flex-grow-1"}>
                    <div className={className}> {children} </div>
                </Row>
            </Container>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClicklogout: () => dispatch(actions.logout()),
    };
};

export default connect(null, mapDispatchToProps)(SupplierLayout);
