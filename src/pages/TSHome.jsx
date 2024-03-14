import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import Create from '../components/Create'
import TicketTable from '../components/TicketTable'
import NewButton from '../components/NewButton'

const TSHome = () => {

    return (
        <Layout>
            <Container fluid>
                <div className='bg-#4CCD99 p-4 mt-2 border'>
                    <Row className='mb-2'>
                        <Col sm={2}>
                            <div class="form-group" >
                                <label for="exampleFormControlInput1">Company</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Type of Issue</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Date Coverage</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col sm={3}>

                            <Stack direction='horizontal' gap={2}>
                                <NewButton />
                                <Form.Select aria-label="Default select example">
                                    <option value="1">Low</option>
                                    <option value="2">Medium</option>
                                    <option value="3">High</option>
                                    <option value="4">Critical</option>
                                </Form.Select>
                                <Form.Select aria-label="Default select example">
                                    <option value="1">Low</option>
                                    <option value="2">Medium</option>
                                    <option value="3">High</option>
                                    <option value="4">Critical</option>
                                </Form.Select>
                            </Stack>

                        </Col>
                        <Col sm={2}>

                        </Col>
                    </Row>
                    <Row>
                        <Create />
                    </Row>
                    <Row className='mt-2'>
                        <TicketTable />
                    </Row>
                </div>

            </Container>
        </Layout>
    )
}

export default TSHome
