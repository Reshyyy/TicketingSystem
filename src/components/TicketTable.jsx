import React from 'react'
import { Container } from 'react-bootstrap'

const TicketTable = () => {
    return (
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Ticket No.</th>
                        <th scope="col">Severity</th>
                        <th scope="col">Issue</th>
                        <th scope="col">Status</th>
                        <th scope="col">Raised by</th>
                        <th scope="col">Assigned to</th>
                        <th scope="col">Ticket Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">7/20/2018</th>
                        <td>TCK-000000001</td>
                        <td>Critical</td>
                        <td>Cannot Print Invoice</td>
                        <td>In Progress</td>
                        <td>Christian Granada Jr.</td>
                        <td>Lizzette.Villahermosa</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TicketTable
