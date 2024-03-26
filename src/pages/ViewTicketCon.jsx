import React, { useEffect, useRef, useState } from 'react'
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Layout from '../components/layout/Layout';
import MainLayout from '../components/layout/MainLayout';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ViewTicketCon = () => {
    // Local Variables
    const [viewTicketDetails, setViewTicketDetails] = useState({ Header: {}, Details: {} });
    const [issueTypes, setIssueTypes] = useState([]);
    const [consultants, setConsultants] = useState([]);
    const [consultant, setConsultant] = useState('');
    const [severity, setSeverity] = useState('');
    const [severities, setSeverities] = useState([]);
    const [status, setStatus] = useState('');
    const [statuses, setStatuses] = useState([]);
    const [lineName, setLineName] = useState('');
    const [lineComment, setLineComment] = useState('');
    const { ticketID } = useParams();
    const navigate = useNavigate();


    // Fetch Data and Render of Data
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
                setStatus(response.data.Header.StatusID);
                setSeverity(response.data.Header.SeverityID);
                // setLineName(response.data.Details.LineName);
                // setLineComment(response.data.Header.LineComment);
                // console.log(response.data.Details.LineID)
            } catch (error) {
                console.error('Error while fetching Issue Areas', error)
            }
        }

        const fetchConsultants = async () => {
            try {
                const response = await axios.post('/api/TicketingSystem/Dynamic/api?functionName=ViewConsultants');
                setConsultants(response.data);
                // setConsultant(response.data);
            } catch (error) {
                console.error('Error while fetching Issue Areas', error)
            }
        }

        const fetchSeverities = async () => {
            try {
                const response = await axios.post('/api/TicketingSystem/Dynamic/api?functionName=ViewSeverities');
                setSeverities(response.data);
            } catch (error) {
                console.error('Error while fetching severities', error)
            }
        }
        const fetchStatuses = async () => {
            try {
                const response = await axios.post('/api/TicketingSystem/Dynamic/api?functionName=ViewStatuses');
                setStatuses(response.data);
            } catch (error) {
                console.error('Error while fetching statuses', error)
            }
        }

        fetchTicketDetails();
        fetchConsultants();
        fetchSeverities();
        fetchStatuses();
    }, [])

    const handleAddTicketLines = async (e) => {
        e.preventDefault();

        const formData = {
            "AddTicketLine": {
                TicketID: `'${ticketID}'`,
                // ConsultantID: `'${consultant}'`,
                ConsultantID: `'ACC-0000002'`,
                SeverityID: `'${severity}'`,
                StatusID: `'${status}'`,
                LineName: lineName,
                LineComment: lineComment,
            }
        }

        // Add Ticket
        axios.post('/api/TicketingSystem/Dynamic/api?functionName=AddTicketLine', formData)
            .then(response => {
                console.log('Add Ticket Lines Successful:', response.data);
                // navigate('/consultant/dashboard');
            })
            .catch(error => {
                console.error('Error adding ticket lines', error);
                // Handle errors here, such as displaying an error message to the user
            });
    }

    // useEffect(() => {
    //     // if (viewTicketDetails) {
    //         setStatus(viewTicketDetails.Header.StatusName);
    //         setSeverity(viewTicketDetails.Header.SeverityName);
    //         setConsultant(viewTicketDetails.FirstName)
    //         console.log(severity);
    //     // }
    //     console.log(viewTicketDetails)
    // }, [viewTicketDetails])

    return (
        <MainLayout>

            <div className='p-5 mt-3 shadow p-3 mb-5 bg-white rounded'>
                <h6 className='font-weight-bold mb-4'>ISSUE FILED</h6>
                <Row>
                    <Col sm={7}>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTicketType">
                                <Form.Label column lg={3}>
                                    Problem Type
                                </Form.Label>
                                <Col sm={10} lg={4}>
                                    {/* <Form.Select aria-label="Default select example">
                                        <option value="">Select an option...</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option>
                                    </Form.Select> */}
                                    <Form.Select aria-label="Default select example" disabled>
                                        {/* {issueTypes.map((type) => {
                                            return (
                                                <option key={type.IssueTypeID} value={type.IssueTypeID}>
                                                    {type.IssueTypeName}
                                                </option>
                                            )
                                        })} */}
                                        <option>{viewTicketDetails.Header.IssueTypeName}</option>

                                    </Form.Select>
                                </Col>
                                <Col>

                                </Col>
                                <Form.Label column>
                                    Status
                                </Form.Label>
                                <Col lg={3}>
                                    <Form.Select
                                        aria-label="Default select example"
                                        value={status || ''}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        {/* <option value="">Select an option...</option> */}
                                        {statuses.map((st) => (
                                            <option key={st.StatusID} value={st.StatusID}>
                                                {st.StatusName}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTicketArea">
                                <Form.Label column lg={3}>
                                    Problem Area
                                </Form.Label>
                                <Col sm={10} lg={4}>
                                    <Form.Select aria-label="Default select example" disabled>
                                        {/* <option value="">Select an option...</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option> */}
                                        <option>{viewTicketDetails.Header.IssueAreaName}</option>
                                    </Form.Select>
                                </Col>
                                <Col>

                                </Col>
                                <Form.Label column>
                                    Severity
                                </Form.Label>
                                <Col lg={3}>
                                    <Form.Select
                                        aria-label="Default select example"
                                        value={severity || ''}
                                        onChange={(e) => setSeverity(e.target.value)}
                                    >
                                        {/* <option value="">Select an option...</option> */}
                                        {severities.map((sev) => (
                                            <option key={sev.SeverityID} value={sev.SeverityID}>
                                                {sev.SeverityName}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTicketTitle">
                                <Form.Label column sm={3}>
                                    Title
                                </Form.Label>
                                <Col sm={10} lg={9}>
                                    <input disabled style={{ width: '100%' }} type="text" value={viewTicketDetails.Header.TicketTitle} class="form-control" id="ticketTitle" />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTicketDetails">
                                <Form.Label>Tell us more about your problem</Form.Label>
                                <Form.Control as="textarea" disabled value={viewTicketDetails.Header.TicketDetails} rows={3} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTicketError">
                                <Form.Label>Exact error message (if applicable)</Form.Label>
                                <Form.Control as="textarea" disabled value={viewTicketDetails.Header.TicketError} rows={2} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTicketSteps">
                                <Form.Label>Steps to reproduce the issue</Form.Label>
                                <Form.Control as="textarea" disabled value={viewTicketDetails.Header.TicketSteps} rows={3} />
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalAttach">

                                <Col sm={7}>
                                    <Form.Label style={{ fontSize: '14px', padding: 0 }}>
                                        Attach file or screenshot of Issue (4 MB Maximum)
                                    </Form.Label>
                                    <Form.Control type="file" disabled />
                                </Col>

                                <Col sm={1} style={{ padding: 0 }}>

                                </Col>

                                <Col sm={4} className='d-flex justify-content-center'>
                                    <Form.Group as={Row} controlId="formHorizontalConsultant">
                                        <Form.Label style={{ fontSize: '14px', padding: 0 }}>
                                            Filed by
                                        </Form.Label>
                                        <input style={{ width: '100%' }} disabled value={viewTicketDetails.Header.FirstName + " " + viewTicketDetails.Header.MiddleName + " " + viewTicketDetails.Header.LastName} type="text" class="form-control" id="title" />
                                    </Form.Group>
                                </Col>

                            </Form.Group>

                        </Form>
                    </Col>
                    {/* {true && */}

                    <Col sm={5}>
                        <Form.Group as={Row} className="" controlId="formHorizontalHistory">
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

                        <Form onSubmit={handleAddTicketLines}>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTitle">
                                <Form.Label column sm={8}>
                                    Add Update Title
                                </Form.Label>
                                <Stack>
                                    <input style={{ width: '100%' }} value={lineName || ''} onChange={(e) => setLineName(e.target.value)} type="text" class="form-control" id="updateTitle" />
                                </Stack>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlComment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" value={lineComment || ''} onChange={(e) => setLineComment(e.target.value)} rows={2} />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group className="" controlId="exampleForm.ControlConsultants">
                                        <Form.Label>Consultant</Form.Label>
                                        <Form.Select aria-label="Default select example" value={consultant || ''} onChange={(e) => setConsultant(e.target.value)}>
                                            {/* <option value="">Select an option...</option> */}
                                            {consultants.map((con) => (
                                                <option key={con.UserID} value={con.UserID}>
                                                    {/* {con.UserID} */}
                                                    {con.FirstName + " " + con.MiddleName + " " + con.LastName}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col className='d-flex justify-content-end align-items-end'>
                                    <Button type="submit" id="solution" className='btn btn-sm btn-secondary w-50'>Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                    {/* } */}

                </Row>
            </div>
        </MainLayout>
    )
}

export default ViewTicketCon
