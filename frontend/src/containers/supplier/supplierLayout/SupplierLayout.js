import React from "react";
import Navigation from "../../../components/navigation/NavigationBottom";
import Topbar from "../../../components/navigation/TopBar";
import * as actions from "../../../redux/actions";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import profileInactive from "../../../assets/icons/ProfilButton.svg";
import produktKatalogInactive from "../../../assets/icons/productcatalog.svg";
import bestelleingangInactive from "../../../assets/icons/Bestelleingang.svg";

import profileActive from "../../../assets/icons/ProfilButtonAusgewählt.svg";
import produktKatalogActive from "../../../assets/icons/productcatalogAusgewählt.svg";
import bestelleingangActive from "../../../assets/icons/BestelleingangAusgewählt.svg";

import "./SupplierLayout.css";
import {Fade} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const SupplierLayout = ({
                            title = "Title",
                            className,
                            children,
                            description = "",
                            showBack = false,
                            location = ""
                        }) => {
    let history = useHistory();

    const navbuttons = [
        {
            picref: (location === "orders" ? bestelleingangActive : bestelleingangInactive),
            name: "Bestelleingänge",
            link: "/orders",
        },
        {
            picref: (location === "catalog" ? produktKatalogActive  : produktKatalogInactive),
            name: "Produktkatalog",
            link: "/catalog",
        },
        {
            picref: (location === "profile" ? profileActive : profileInactive),
            name: "Profil",
            link: "/profile",
        },
    ];
    return (
        <>
            <Topbar backButton={() => history.goBack()} showBack={showBack}/>
            <Navigation pagelist={navbuttons}/>
            <Container fluid className={"d-flex flex-column min-vh-100"}>
                <Row style={{marginTop: "20%"}}>
                    {description !== "" &&
                    <Container fluid style={{marginBottom: "1rem"}}>
                        {description.split("\n").map((item, key) => {
                            return <p className='lead text-center' key={key}> {item}</p>
                        })}
                    </Container>
                    }
                </Row>
                <Row className={"flex-grow-1 content"}>
                    <Fade in={true}>
                        <div style={{marginBottom: "18%", width: "100%"}}>
                            {children}
                        </div>
                    </Fade>
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
