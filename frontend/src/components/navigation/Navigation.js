import React, {} from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./nav.scss";



const Navigation =() => {
        return (
                <Navbar>
                    <Nav className="justify-content-center fixed-bottom">
                            <Nav.Link className={'navItem'} href="/home">Home</Nav.Link>
                            <Nav.Link className={'navItem'} href="/search">Search</Nav.Link>
                            <Nav.Link className={'navItem'} href="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar>
        )
}

export default Navigation;
