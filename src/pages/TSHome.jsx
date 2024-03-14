import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Create from '../components/Create'
import TicketTable from '../components/TicketTable'

const TSHome = () => {

    return (
        <Layout>
            <Container fluid>
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
                    <Col sm={2}>
                        New
                    </Col>
                    <Col sm={2}>

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
            </Container>
        </Layout>
    )
}

export default TSHome
