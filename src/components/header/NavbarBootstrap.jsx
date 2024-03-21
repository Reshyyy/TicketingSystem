import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import rafiNavbarLogo from './../../assets/rafiLogo.png'
import { Col, Stack } from 'react-bootstrap';

const NavbarBootstrap = () => {
    return (
        <div className='bg-light p-0'>
            <Navbar expand="lg" className="bg-body-tertiary">
                {/* <Container> */}
                <Col sm={5} className='d-flex justify-content-start align-items-center p-0'>
                    <Stack direction="horizontal" alignItems="center">
                        <img src={rafiNavbarLogo} style={{ height: '60px', width: '100px' }} alt="navbarLogo" />
                    </Stack>
                    <Stack direction="column" alignItems="start" gap={1}>
                        {/* <h6>Ticketing System</h6> */}
                        <Navbar.Brand>Ticketing System</Navbar.Brand>
                    </Stack>
                </Col>
                <Col sm={5}>
                    {/* <Stack>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Stack> */}
                </Col>
                {/* <img src={rafiNavbarLogo} style={{ height: '60px', width: '100px' }} alt="navbarLogo" /> */}
                {/* <Navbar.Brand href="/login">Ticketing System</Navbar.Brand> */}
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
                {/* </Container> */}

                <Col sm={2} className='d-flex justify-content-end'>
                    <Nav>
                        <Nav.Link href="/login"><b>Login</b></Nav.Link>
                    </Nav>
                </Col>
            </Navbar>
        </div>
    )
}

export default NavbarBootstrap
