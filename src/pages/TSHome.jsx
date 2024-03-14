import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import Create from '../components/Create'
import TicketTable from '../components/TicketTable'
import NewButton from '../components/NewButton'
import './../components/styles/dashboard.css'

const TSHome = () => {
    const [date, setDate] = useState(new Date());
    const [create, setCreate] = useState(null);

    const handleCreateClick = async () => {
        console.log('Create button clicked');
    }

    return (
        // Dashboard
        <Layout>
            <Container fluid>
                <div className='p-4 mt-2 border bg-form'>
                    <Row className='mb-2'>
                        <Col sm={2}>
                            <div class="form-group" >
                                <label for="exampleFormControlInput1">Company</label>
                                <Form.Select aria-label="Default select example">
                                    <option value="1">Education</option>
                                    <option value="2">Accounting</option>
                                    <option value="3">Program Excellence</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Type of Issue</label>
                                <Form.Select aria-label="Default select example">
                                    <option value="1">Error</option>
                                    <option value="2">Information</option>
                                    <option value="3">Inquiry</option>
                                    <option value="3">Issue</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Date Coverage</label>
                                <Form.Control
                                    type="date"
                                    name="datepic"
                                    placeholder="DateRange"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
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
                                    <option value="newest">Newest</option>
                                    <option value="oldest">Oldest</option>
                                </Form.Select>
                            </Stack>

                        </Col>
                        <Col sm={2}>

                        </Col>
                    </Row>
                    <Row>
                        {/* <Create /> */}
                        <div>
                            <Button onClick={handleCreateClick} variant="secondary" style={{ width: '80px' }}>Create</Button>
                        </div>

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
