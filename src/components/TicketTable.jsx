import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const TicketTable = ({ onTicketClick }) => {
    const [viewTickets, setViewTickets] = useState([]);

    const fetchViewTickets = async () => {
        const formData = {
            "ViewTickets": {
                "ticketID": ""
            }
        }
        try {
            const response = await axios.post('/api/TicketingSystem/Dynamic/api?functionName=ViewTickets', formData);
            if (response.status === 200) { // Assuming 200 is the success status
                setViewTickets(response.data);
            } else {
                console.error('Error viewing tickets: Response status:', response.status);
            }
        } catch (error) {
            console.error('Error viewing tickets', error);
        }
    }

    useEffect(() => {
        fetchViewTickets();
    }, [])

    return (
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Ticket Number</th>
                        <th scope="col">Severity</th>
                        <th scope="col">Date FIled</th>
                        <th scope="col">Issue</th>
                        <th scope="col">Status</th>
                        <th scope="col">Raised by</th>
                        <th scope="col">Assignee</th>
                        <th scope="col">Ticket Age</th>
                    </tr>
                </thead>
                <tbody>
                    {viewTickets.map(ticket => (
                        <tr key={ticket.ticketID}>
                            <td>
                                <a href={`/tickets/${ticket.TicketID}`} onClick={() => onTicketClick(ticket.TicketID)}>
                                    {ticket.TicketID}
                                </a>
                            </td>
                            <td>{ticket.Severity}</td>
                            <td>{ticket.TicketDateFiled}</td>
                            <td>{ticket.IssueTypeName}</td>
                            {/* <td>{ticket.TicketStatus}</td> */}
                        </tr>
                    ))}
                    {/* <tr>
                        <td>7/20/2018</td>
                        <td>TCK-000000001</td>
                        <td>Critical</td>
                        <td>Cannot Print Invoice</td>
                        <td>In Progress</td>
                        <td>Christian Granada Jr.</td>
                        <td>Lizzette.Villahermosa</td>
                        <td>1</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default TicketTable
