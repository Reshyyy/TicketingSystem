import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import './../components/styles/create.css'

const Create = () => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());

    return (
        <div className=''>
            <Button href="/create" onClick={() => setShow(true)} variant="secondary" style={{ width: '80px' }}>Create</Button>

            <Modal
                size="md"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Create Ticket
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div>
                        <Form.Control
                            type="date"
                            name="datepic"
                            placeholder="DateRange"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className='mt-2'>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                            <option value="4">Critical</option>
                        </Form.Select>
                    </div>
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default Create
