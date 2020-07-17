import React from "react";
import "../../../styles.css";
import Navigation from "../../../components/navigation/NavigationBottom";
import Topbar from "../../../components/navigation/TopBar";
import * as actions from "../../../redux/actions";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import profileInactive from "../../../assets/icons/ProfilButton.svg";
import produktKatalogInactive from "../../../assets/icons/productcatalog.svg";
import bestelleingangInactive from "../../../assets/icons/Bestelleingang.svg";

import profileActive from "../../../assets/icons/ProfilButtonAusgewählt.svg";
import produktKatalogActive from "../../../assets/icons/productcatalogAusgewählt.svg";
import bestelleingangActive from "../../../assets/icons/BestelleingangAusgewählt.svg";

import "./SupplierLayout.css";

const SupplierLayout = ({
    title = "Title",
    className,
    children,
    onClicklogout,
    location= ""
}) => {
    const navbuttons = [
        {
            picref: (location === "orders" ? bestelleingangActive : bestelleingangInactive),
            name: "Bestelleingänge",
            link: "/orders",
        },
        {
            picref: (location === "catalog" ? produktKatalogActive  : produktKatalogInactive),
            name: "Productkatalog",
            link: "/catalog",
        },
        {
            picref: (location==="profile" ? profileActive : profileInactive),
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
                    {console.log(location)}
                    <h3 className="page-title">{title}</h3>
                </Row>
                <Row className={"flex-grow-1"}>
                    {children}
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
