import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

const TicketTable = ({ onTicketClick }) => {
    // Variables
    const [viewTickets, setViewTickets] = useState([]);

    // Fetch Data
    const fetchViewTickets = async () => {
        try {
            const response = await axios.post('/api/TicketingSystem/Dynamic/api?functionName=ViewTickets');
            setViewTickets(response.data);
        } catch (error) {
            console.error('Error viewing tickets', error);
        }
    }

    // Execute
    useEffect(() => {
        fetchViewTickets();
    }, []);

    return (
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Ticket Number</th>
                        <th scope="col">Severity</th>
                        <th scope="col">Date Filed</th>
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
                            <td>{new Date(ticket.TicketDateFiled).toLocaleDateString('en-US',{dateStyle: 'short'})}</td>
                            <td>{ticket.IssueTypeName}</td>
                            {/* <td>{ticket.TicketStatus}</td> */}
                            {/* <td>{ticket.TicketBy}</td> */}
                            {/* <td>{ticket.TicketAssgned}</td> */}
                            {/* <td>{ticket.TicketAge}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TicketTable
