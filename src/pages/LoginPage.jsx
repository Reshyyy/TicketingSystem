import React from 'react'
import NavbarBootstrap from '../components/header/Navbar'
import './login.css'
import rafiLogo from './../assets/rafiLogo.png'
import { Button, Card, Col, Container, FloatingLabel, Form, InputGroup, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../components/styles/loginpage.css'

const LoginPage = () => {
  return (
    <div className='custom-div'>
      <Container fluid>
        <div className='d-flex align-items-center justify-content-center vh-100'>

          <Card className='d-flex justify-content-center p-2' style={{ width: '24rem' }}>
            <Card.Body>
              <div className='d-flex justify-content-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="50" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <div className='d-flex justify-content-center'>
                <Card.Title>Sign In</Card.Title>
              </div>
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
              <Button className='w-100' variant="primary">Sign In</Button>
              <Row container>
                <Col item xs>
                  <Link href="#" variant="body2">
                    <p><small>Forgot Password?</small></p>
                  </Link>
                </Col>
                <Col item>
                  <a href="/register">
                    <p><small>Don't have an account? Sign Up</small></p>
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>


  )
}

export default LoginPage
