import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { Button, Col, Container, Form, Nav, Row, Stack } from 'react-bootstrap'
import Create from '../components/Create'
import TicketTable from '../components/TicketTable'
import NewButton from '../components/NewButton'
import './../components/styles/tshome.css'
import NavbarBootstrap from '../components/header/NavbarBootstrap'
import NavbarMain from '../components/header/NavbarMain'
import Sidebar from '../components/sidebar/Sidebar'
import MainLayout from '../components/layout/MainLayout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const TSDashboard = () => {
    const [date, setDate] = useState(new Date());
    const [create, setCreate] = useState(null);
    const navigate = useNavigate();
    const [submittedData, setSubmittedData] = useState([]);
    const [viewTickets, setViewTickets] = useState([]);

    const handleCreateClick = async () => {
        navigate('/create');
    }

    const handleTicketClick = (ticketID) => {
        navigate(`/tickets/${ticketID}`); // Replace with your desired navigation logic
    }

    // const fetchViewTickets = async () => {
    //     const formData = {
    //         "ViewTicketLines": {
    //             "ticketID": ""
    //         }
    //     }
    //     try {
    //         const response = await axios.post('/api/TicketingSystem/Dynamic/api?functionName=ViewTickets', formData);
    //         setViewTickets(response.data);
    //     } catch (error) {
    //         console.error('Error viewing tickets', error);
    //     }
    // }

    // useEffect(() => {
    //     fetchViewTickets();
    // }, [])



    return (
        // Dashboard
        <MainLayout>
            <div className='p-5 mt-3 border bg-white shadow p-3 mb-5 bg-white rounded'>
                <Row className='mb-2'>
                    <Col sm={2}>
                        <div class="form-group" >
                            <label for="exampleFormControlInput1"><b>Company</b></label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Education</option>
                                <option value="2">Accounting</option>
                                <option value="3">Program Excellence</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1"><b>Type of Issue</b></label>
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
                            <label for="exampleFormControlInput1"><b>Date from</b></label>
                            <Form.Control
                                type="date"
                                name="datepic"
                                placeholder="DateRange"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    </Col>

                    <Col sm={2}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1"><b>Date to</b></label>
                            <Form.Control
                                type="date"
                                name="datepic"
                                placeholder="DateRange"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    </Col>

                    <Col sm={2}>
                        <div class="form-group" >
                            <label for="exampleFormControlInput1"><b>Order By</b></label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Newest</option>
                                <option value="2">Oldest</option>
                            </Form.Select>
                        </div>
                    </Col>

                    <Col sm={2} className="d-flex justify-content-end align-items-center">
                        <Button onClick={handleCreateClick} variant="secondary" style={{ width: '80px' }}>Create</Button>
                    </Col>



                </Row>
                <Row className='mt-2'>
                    <TicketTable onTicketClick={handleTicketClick} />
                </Row>
                <div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span class="sr-only">Previous</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </MainLayout >




    )
}

export default TSDashboard
