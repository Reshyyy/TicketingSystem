import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import rafiNavbarLogo from './../../assets/rafiLogo.png'
import { Stack } from 'react-bootstrap';

const NavbarMain = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                {/* <Container> */}
                <Stack direction='horizontal'>
                    <Stack>
                        <img src={rafiNavbarLogo} style={{ height: '60px', width: '100px' }} alt="navbarLogo" />
                    </Stack>
                    <div className='d-flex justicy-content-center align-middle'>
                        <Stack>
                            <h6>Ticketing System</h6>
                            <h6>RAFI - Ramon Aboitiz Foundation Inc.</h6>
                        </Stack>
                    </div>

                </Stack>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
