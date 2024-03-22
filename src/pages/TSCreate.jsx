import React, { useEffect, useRef, useState } from 'react'
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Layout from '../components/layout/Layout';
import MainLayout from '../components/layout/MainLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TSCreate = () => {
    // Variables
    const [issueType, setIssueType] = useState('');
    const [issueArea, setIssueArea] = useState('');
    const [ticketTitle, setTicketTitle] = useState('');
    const [ticketDetails, setTicketDetails] = useState('');
    const [ticketError, setTicketError] = useState('');
    const [ticketSteps, setTicketSteps] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [issueAreas, setIssueAreas] = useState([]);
    const [issueTypes, setIssueTypes] = useState([]);
    const navigate = useNavigate();

    const [submittedData, setSubmittedData] = useState([]);
    const fileInputRef = useRef(null);

    // On Change
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    // Fetch Data
    useEffect(() => {
        if (selectedFile) {
            console.log("File Name:", selectedFile.name);
            console.log("File Size:", selectedFile.size, "bytes");
        }
    }, [selectedFile]);

    useEffect(() => {
        const fetchViewIssueAreas = async () => {
            const formData = {
                "ViewIssueAreas": {
                    "IssueAreaName": ""
                }
            }
            try {
                const response = await axios.post('/api/TicketingSystem/Dynamic/api?functionName=ViewIssueAreas', formData);
                if (response.status === 200) { // Assuming 200 is the success status
                    setIssueAreas(response.data);
                } else {
                    console.error('Cannot fetch Issue Area', response.status);
                }
            } catch (error) {
                console.error('Error while fetching Issue Areas', error)
            }
        }
        const fetchViewIssueTypes = async () => {
            const formData = {
                "ViewIssueTypes": {
                    "IssueAreaName": ""
                }
            }
            try {
                const response = await axios.post('/api/TicketingSystem/Dynamic/api?functionName=ViewIssueTypes', formData);
                if (response.status === 200) { // Assuming 200 is the success status
                    setIssueTypes(response.data);
                } else {
                    console.error('Cannot fetch Issue Types', response.status);
                }
            } catch (error) {
                console.error('Error while fetching Issue Types', error)
            }
        }
        fetchViewIssueAreas();
        fetchViewIssueTypes();
    }, [])

    // Submit
    const handleCreateSubmit = async (e) => {
        e.preventDefault();

        // Validation logic
        if (!issueType || !issueArea || !ticketTitle || !ticketDetails) {
            alert("Please fill in all required fields.");
            return;
        }

        const formData = {
            "AddTicket": {
                issueTypeID: `'${issueType}'`,
                issueAreaID: `'${issueArea}'`,
                userID: "'ACC-0000001'",
                ticketTitle: ticketTitle,
                ticketDetails: ticketDetails,
                ticketError: ticketError,
                ticketSteps: ticketSteps,
                ticketAttachFile: "''"
            }
        }

        // Add Ticket
        axios.post('/api/TicketingSystem/Dynamic/api?functionName=AddTicket', formData)
            .then(response => {
                console.log('Add Ticket Successful:', response.data);
                navigate('/dashboard');
            })
            .catch(error => {
                console.error('Error adding ticket', error);
                // Handle errors here, such as displaying an error message to the user
            });



    }


    return (
        <MainLayout>
            <div className='p-5 mt-3 shadow p-3 mb-5 bg-white rounded'>
                <h6 className='font-weight-bold mb-4'>DESCRIBE YOUR ISSUE</h6>
                <Row>
                    <Col sm={8}>
                        <Form onSubmit={handleCreateSubmit}>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalProblemType">
                                <Form.Label column sm={3}>
                                    Problem Type
                                </Form.Label>
                                <Col sm={10} lg={4}>
                                    <Form.Select aria-label="Default select example" value={issueType} onChange={(e) => setIssueType(e.target.value)}>
                                        <option value="">Select an option...</option>
                                        {issueTypes.map((type) => (
                                            <option key={type.IssueTypeID} value={type.IssueTypeID}>
                                                {type.IssueTypeName}
                                            </option>
                                        ))}
                                    </Form.Select>

                                    {/* <Form.Select aria-label="Default select example" value={issueType} onChange={(e) => setIssueType(e.target.value)}>
                                        <option value="">Select an option...</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option>
                                    </Form.Select> */}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalProblemArea">
                                <Form.Label column sm={3}>
                                    Problem Area
                                </Form.Label>
                                <Col sm={10} lg={4}>


                                    <Form.Select aria-label="Default select example" value={issueArea} onChange={(e) => setIssueArea(e.target.value)}>
                                        <option value="">Select an option...</option>
                                        {issueAreas.map((area) => (
                                            <option key={area.IssueAreaID} value={area.IssueAreaID}>
                                                {area.IssueAreaName}
                                            </option>
                                        ))}
                                    </Form.Select>


                                    {/* <Form.Select aria-label="Default select example" value={problemArea} onChange={(e) => setProblemArea(e.target.value)}>
                                        <option value="">Select an option...</option>
                                        <option value="Fixed Assets">Fixed assets</option>
                                        <option value="General Ledger">General Ledger</option>
                                        <option value="Public Sector">Public sector</option>
                                    </Form.Select> */}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTitle">
                                <Form.Label column sm={3}>
                                    Title
                                </Form.Label>
                                <Col sm={10} lg={9}>
                                    <input style={{ width: '100%' }} type="text" value={ticketTitle} onChange={(e) => setTicketTitle(e.target.value)} class="form-control" id="title" />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Tell us more about your problem</Form.Label>
                                <Form.Control as="textarea" value={ticketDetails} onChange={(e) => setTicketDetails(e.target.value)} rows={3} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Exact error message (if applicable)</Form.Label>
                                <Form.Control as="textarea" value={ticketError} onChange={(e) => setTicketError(e.target.value)} rows={2} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Steps to reproduce the issue</Form.Label>
                                <Form.Control as="textarea" value={ticketSteps} onChange={(e) => setTicketSteps(e.target.value)} rows={3} />
                            </Form.Group>

                            <Form.Group as={Row} className="" controlId="formHorizontalAttach">

                                <Col sm={6}>
                                    <Form.Label style={{ fontSize: '14px' }}>
                                        Attach file or screenshot of Issue (4 MB Maximum)
                                    </Form.Label>
                                    <Form.Control type="file" ref={fileInputRef} onChange={handleFileChange} />
                                </Col>

                                <Col sm={3}>

                                </Col>

                                <Col sm={3} className='d-flex justify-content-start'>
                                    <Form.Group as={Row} controlId="formHorizontalSubmit">
                                        <Form.Label style={{ fontSize: '14px', fontStyle: 'italic' }}>
                                            Solution not in the list?
                                        </Form.Label>
                                        <Button type="submit" id="solution" className='btn btn-sm btn-secondary'>Submit</Button>
                                    </Form.Group>
                                </Col>

                            </Form.Group>

                        </Form>
                    </Col>
                    <Col>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPossible">
                            <Form.Label column sm={8} className='font-weight-bold'>
                                POSSIBLE ISSUE SOLUTIONS
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

export default TSCreate
