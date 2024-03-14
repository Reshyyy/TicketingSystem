import React from 'react'
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Layout from '../components/layout/Layout';

const TSCreate = () => {
    
    return (
        <Layout>
            <div className='container bg-form p-5'>
                <h6 className='font-weight-bold mb-4'>DESCRIBE YOUR ISSUE</h6>
                <Row>
                    <Col sm={8}>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalProblemType">
                                <Form.Label column sm={3}>
                                    Problem Type
                                </Form.Label>
                                <Col sm={10} lg={4}>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">Low</option>
                                        <option value="2">Medium</option>
                                        <option value="3">High</option>
                                        <option value="4">Critical</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalProblemArea">
                                <Form.Label column sm={3}>
                                    Problem Area
                                </Form.Label>
                                <Col sm={10} lg={4}>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">Fixed assets</option>
                                        <option value="2">General Ledger</option>
                                        <option value="3">Public sector</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalTitle">
                                <Form.Label column sm={3}>
                                    Title
                                </Form.Label>
                                <Col sm={10} lg={9}>
                                    <input style={{ width: '100%' }} type="text" class="form-control" id="title" />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Tell us more about your problem</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Exact error message (if applicable)</Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalAttach">
                                <Form.Label>
                                    Attach file or screenshot of Issue (4 MB Maximum)
                                </Form.Label>
                                <Col sm={5}>
                                    <Form.Control type="file" />
                                </Col>

                            </Form.Group>

                        </Form>
                    </Col>
                    <Col>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAttach">
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
                <Stack direction='justify-end'>
                    <div>Solution not in the list?</div>
                    <div>
                        <Button>Submit</Button>
                    </div>
                </Stack>
            </div>
        </Layout>


    )
}

export default TSCreate
