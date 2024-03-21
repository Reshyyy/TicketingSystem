import React from 'react'
import NavbarBootstrap from '../components/header/NavbarBootstrap'
import './login.css'
import rafiLogo from './../assets/rafiLogo.png'
import { Button, Card, Col, Container, FloatingLabel, Form, InputGroup, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../components/styles/register.css'

const Register = () => {
    return (
        <Container fluid className='register-bg'>
            <div className='d-flex align-items-center justify-content-center vh-100'>

                <Card className='d-flex justify-content-center p-2' style={{ width: '24rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <div className='d-flex justify-content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="50" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Card.Title>Register</Card.Title>
                        </div>
                        <Row container>
                            <Col item xs>
                                <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Firstname</Form.Label>
                                    <Form.Control size="sm" type="email" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col item>
                                <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Lastname</Form.Label>
                                    <Form.Control size="sm" type="email" placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control size="sm" type="email" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-2 mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control size="sm" type="email" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                label="Remember me"
                            />
                        </Form.Group>
                        <Button className='w-100' variant="primary">Sign Up</Button>
                        <div className='d-flex justify-content-end'>
                            <Row container className='mt-2'>
                                <Col item>
                                    <a href="/login">
                                        <p><small>Already have an account? Sign in</small></p>
                                    </a>
                                </Col>
                            </Row>
                        </div>

                    </Card.Body>
                </Card>
                {/* <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Stack>
            <Button variant="primary" type="submit" className='w-100'>
              Submit
            </Button>
          </Stack>

        </Form> */}
            </div>
        </Container>

    )
}

export default Register
