import React, { useEffect, useRef, useState } from 'react'
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Layout from '../components/layout/Layout';
import MainLayout from '../components/layout/MainLayout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewTicketUser = () => {
    // Local Variables
    const [viewTicketDetails, setViewTicketDetails] = useState([]);
    const { ticketID } = useParams();

    // Fetch and Render Data
    useEffect(() => {
        const fetchTicketDetails = async () => {
            const formData = {
                "Header": {
                    "ViewTicket": {
                        "ticketID": `'${ticketID}'`
                    }
                },
                "Details":
                {
                    "ViewTicketLines": {
                        "ticketID": `'${ticketID}'`
                    }
                }

            }
            try {
                const response = await axios.post('/api/TicketingSystem/Dynamic/api/View', formData);
                setViewTicketDetails(response.data);
            } catch (error) {
                console.error('Error while fetching Issue Areas', error)
            }
        }
        fetchTicketDetails();
    }, [])

    return (
        <MainLayout>
            <div className='p-5 mt-3 shadow p-3 mb-5 bg-white rounded'>
                <h6 className='font-weight-bold mb-4'>YOUR ISSUE</h6>
                <Row>
                    <Col sm={7}>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTicketType">
                                <Form.Label column lg={3}>
                                    Problem Type
                                </Form.Label>
                                <Col sm={10} lg={4}>
                                    <Form.Select aria-label="Default select example">
                                        <option value="">Select an option...</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option>
                                    </Form.Select>
                                </Col>
                                <Col>

                                </Col>
                                <Form.Label column>
                                    Status
                                </Form.Label>
                                <Col lg={3}>
                                    <Form.Select aria-label="Default select example">
                                        <option value="">Select an option...</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTicketArea">
                                <Form.Label column lg={3}>
                                    Problem Area
                                </Form.Label>
                                <Col sm={10} lg={4}>
                                    <Form.Select aria-label="Default select example">
                                        <option value="">Select an option...</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option>
                                    </Form.Select>
                                </Col>
                                <Col>

                                </Col>
                                <Form.Label column>
                                    Severity
                                </Form.Label>
                                <Col lg={3}>
                                    <Form.Select aria-label="Default select example">
                                        <option value="">Select an option...</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTicketTitle">
                                <Form.Label column sm={3}>
                                    Title
                                </Form.Label>
                                <Col sm={10} lg={9}>
                                    <input style={{ width: '100%' }} type="text" class="form-control" id="ticketTitle" />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTicketDetails">
                                <Form.Label>Tell us more about your problem</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTicketError">
                                <Form.Label>Exact error message (if applicable)</Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTicketSteps">
                                <Form.Label>Steps to reproduce the issue</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group as={Row} className="" controlId="formHorizontalAttach">

                                <Col sm={6}>
                                    <Form.Label style={{ fontSize: '14px', padding: 0 }}>
                                        Attach file or screenshot of Issue (4 MB Maximum)
                                    </Form.Label>
                                    <Form.Control type="file" />
                                </Col>

                                <Col sm={1} style={{ padding: 0 }}>

                                </Col>

                                <Col sm={5} className='d-flex justify-content-center'>
                                    <Form.Group as={Row} controlId="formHorizontalConsultant">
                                        <Form.Label style={{ fontSize: '14px', padding: 0 }}>
                                            Consultant
                                        </Form.Label>
                                        <input style={{ width: '100%' }} type="text" class="form-control" id="title" />
                                    </Form.Group>
                                </Col>

                            </Form.Group>

                        </Form>
                    </Col>
                    <Col sm={5}>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalHistory">
                            <Form.Label column sm={8} className='font-weight-bold'>
                                History
                            </Form.Label>
                            <Stack>
                                <div className='bg-light p-3' style={{ height: '100%' }}>
                                    <ul class="list-unstyled">
                                        <li>This is a list.</li>
                                        <li>It appears completely unstyled.</li>
                                        <li>Structurally, it's still a list.</li>
                                        <li>However, this style only applies to immediate child elements.</li>
                                        <li>Nested lists:
                                            <ul>
                                                <li>are unaffected by this style</li>
                                                <li>will still show a bullet</li>
                                                <li>and have appropriate left margin</li>
                                            </ul>
                                        </li>
                                        <li>This may still come in handy in some situations.</li>
                                    </ul>
                                </div>
                            </Stack>

                        </Form.Group>
                    </Col>

                </Row>
                {/* <Row style={{ justifyContent: 'end' }}>
                    <Col sm={9}>
                    </Col>
                    <Col sm={2}>
                        <Form.Group as={Row} controlId="formHorizontalSubmit">
                            <Form.Label>
                                Solution not in the list?
                            </Form.Label>
                            <Button type="button" id="solution" className='btn btn-sm btn-secondary'>Submit</Button>
                        </Form.Group>
                    </Col>
                    <Col sm={1}>

                    </Col>
                </Row> */}
            </div>
        </MainLayout>
    )
}

export default ViewTicketUser
