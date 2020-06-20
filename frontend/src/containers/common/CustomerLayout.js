import React from 'react';
//import '../../styles.css'
import Navigation from "../../components/navigation/Navigation";
import Topbar from "../../components/navigation/TopBar";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import "./layoutstyle.scss"
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const CustomerLayout = ({
                            title = 'Title',
                            description = 'Description',
                            className,
                            children,
                            onClicklogout
                        }) => {
        const navbuttons = [
            {
                name: 'Home',
                link: '/home'
            },
            {
                name: 'Search',
                link: '/search'
            },
            {
                name: 'Profile',
                link: '/profile'
            },

        ]

        return (
            <>
                <Topbar onClick={onClicklogout}/>
                <Navigation pagelist={navbuttons}/>
                <Row>
                    <Container fluid style={{marginTop:"12%"}}>
                        <h2> {title} </h2>
                        <p className='lead'> {description}</p>
                    </Container>
                </Row>
                <Row>
                    <div className={className}> {children} </div>
                </Row>
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