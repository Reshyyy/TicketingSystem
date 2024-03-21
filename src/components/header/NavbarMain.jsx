import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import rafiNavbarLogo from './../../assets/rafiLogo.png'
import { Col, Stack } from 'react-bootstrap';

const NavbarMain = () => {
    return (

            <Navbar expand="lg" className='p-0'>
                {/* <Container> */}
                <Col sm={10} className='d-flex justify-content-start p-0'>
                    <Stack direction="horizontal" alignItems="center">
                        <img src={rafiNavbarLogo} style={{ height: '60px', width: '100px' }} alt="navbarLogo" />
                    </Stack>
                    <Stack direction="column" alignItems="start" gap={1}>
                        <h6>Ticketing System</h6>
                        <h6>RAFI - Ramon Aboitiz Foundation Inc.</h6>
                    </Stack>
                </Col>

                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link href="/Create">Create</Nav.Link>
                            <Nav.Link href="/new">New</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> */}
                {/* </Container> */}

                <Col sm={2} className='d-flex justify-content-end'>
                    <Nav>
                        <Nav.Link href="/logout"><b>Logout</b></Nav.Link>
                    </Nav>
                </Col>


            </Navbar>
    )
}

export default NavbarMain
