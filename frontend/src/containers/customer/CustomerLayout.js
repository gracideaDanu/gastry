import React from 'react';
//import '../../styles.css'
import Navigation from "../../components/navigation/Navigation";
import Topbar from "../../components/navigation/TopBar";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import homeButton from "../../assets/icons/HomeButton.svg";
import homebuttonActive from "../../assets/icons/HomeButtonAusgewählt.svg";
import basketButton from "../../assets/icons/Warenkorb.svg";
import basketButtonActive from "../../assets/icons/WarenkorbAusgewählt.svg";
import profileButton from "../../assets/icons/ProfilButton.svg";
import profileButtonActive from "../../assets/icons/ProfilButtonAusgewählt.svg";
const CustomerLayout = ({
                            title = 'Title',
                            showBasket = false,
                            description = 'Description',
                            className,
                            children,
                            onClicklogout,
                            basketState

                        }) => {
        const navbuttons = [
            {
                picref: homeButton,
                name: 'Home',
                link: '/home'
            },
            {
                picref:basketButton,
                name: 'Basket',
                link: '/search'
            },
            {
                picref:profileButton,
                name: 'Profile',
                link: '/profile'
            },

        ]

        return (
            <>
                <Topbar onClick={onClicklogout}  showBasket={showBasket} basketState={basketState}/>
                <Navigation pagelist={navbuttons}/>
                <Container fluid className={"h-100  d-flex flex-column"}>
                    <Row>
                        <Container fluid style={{marginTop: "12%"}}>
                            <h3> {title} </h3>
                            <p className='lead'> {description}</p>
                        </Container>
                    </Row>
                    <Row className={"flex-grow-1"}>
                        <div className={className}> {children} </div>
                    </Row>
                </Container>
            </>
        )
    }
;

const mapDispatchToProps = (dispatch) => {
    return {
        onClicklogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(CustomerLayout);