import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import rafiNavbarLogo from './../../assets/rafiLogo.png'
import { Col, Stack } from 'react-bootstrap';

const NavbarMain = () => {
    return (
        <div>
            <Navbar expand="lg" className="">
                {/* <Container> */}
                    <Stack>
                        <img src={rafiNavbarLogo} style={{ height: '60px', width: '100px' }} alt="navbarLogo" />
                    </Stack>
                    <Stack className='d-flex flex-column justify-content-start'>
                        <h6>Ticketing System</h6>
                        <h6>RAFI - Ramon Aboitiz Foundation Inc.</h6>
                    </Stack>
                
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link href="/Create">Create</Nav.Link>
                            <Nav.Link href="/new">New</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> */}
                {/* </Container> */}
            </Navbar>
        </div>
    )
}

export default NavbarMain
