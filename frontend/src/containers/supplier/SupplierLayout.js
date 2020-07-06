import React from "react";
import "../../styles.css";
import Navigation from "../../components/navigation/NavigationBottom";
import Topbar from "../../components/navigation/TopBar";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import homeButton from "../../assets/icons/HomeButton.svg";
import profileButton from "../../assets/icons/ProfilButton.svg";

const SupplierLayout = ({
    title = "Title",
    description = "Description",
    className,
    children,
    onClicklogout,
}) => {
    const navbuttons = [
        {
            picref: homeButton,
            name: "Home",
            link: "/home",
        },
        {
            picref: profileButton,
            name: "Profile",
            link: "/profile",
        },
    ];
    return (
        <>
            <Topbar onClick={onClicklogout} />
            <Navigation pagelist={navbuttons} />
            <Container fluid className={"h-100  d-flex flex-column"}>
                <Row>
                    <Container fluid style={{ marginTop: "12%" }}>
                        <h2> {title} </h2>
                        <p className="lead"> {description}</p>
                    </Container>
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
