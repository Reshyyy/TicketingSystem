import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import rafiNavbarLogo from './../../assets/rafiLogo.png'

const NavbarBootstrap = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary rounded-pill">
                <Container>
                    <img src={rafiNavbarLogo} style={{ height: '60px', width: '100px' }} alt="navbarLogo" />
                    <Navbar.Brand href="#home">RAFI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarBootstrap
