import React from 'react';
import '../../styles.css'
import NavigationBottom from "../../components/navigation/NavigationBottom";
import Topbar from "../../components/navigation/TopBar";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const SupplierLayout = ({
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
            name: 'Profile',
            link: '/profile'
        }

    ]
    return (
        <>
            <Topbar onClick={onClicklogout} />
            <NavigationBottom pagelist={navbuttons}/>
            <Container fluid className={"h-100  d-flex flex-column"}>
                <Row>
                    <Container fluid style={{marginTop: "12%"}}>
                        <h2> {title} </h2>
                        <p className='lead'> {description}</p>
                    </Container>
                </Row>
                <Row className={"flex-grow-1"}>
                    <div className={className}> {children} </div>
                </Row>
            </Container>
        </>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClicklogout: () => dispatch(actions.logout())
    }
}


export default connect(null, mapDispatchToProps)(SupplierLayout);