import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import MyPagination from './../pagination'
import axios from 'axios'

const TicketTable = ({ onTicketClick, currentPage, onPageChange }) => {
    // Variables
    const [viewTickets, setViewTickets] = useState([]); // view all
    const [viewTicketPerUser, setViewTicketPerUser] = useState([]); // per user
    const currentDate = new Date();

    // Functions
    function calculateTicketAge(ticketDateFiled) {
        const filedDate = new Date(ticketDateFiled);
        const timeDifference = currentDate.getTime() - filedDate.getTime();

        // Convert milliseconds to days (you can adjust for hours, minutes, etc.)
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference + ' day(s)';
    }


    // Fetch Data
    // const fetchViewTickets = async () => {
    //     try {
    //         // const UserID = 'ACC-0000001'
    //         const response = await axios.post('/api/TicketingSystem/Dynamic/api?functionName=ViewTickets');
    //         setViewTickets(response.data);
    //     } catch (error) {
    //         console.error('Error viewing tickets', error);
    //     }
    // }

    const fetchViewTicketsPerUser = async () => {
        const formData = {
            "ViewTicketsPerUser": {
                "UserID": "'ACC-0000001'"
            }
        }

        try {
            // const UserID = 'ACC-0000001'
            const response = await axios.post('/api/TicketingSystem/Dynamic/api?functionName=ViewTicketsPerUser', formData);
            setViewTicketPerUser(response.data);
        } catch (error) {
            console.error('Error viewing tickets per user', error);
        }
    }

    // Execute
    useEffect(() => {
        // fetchViewTickets();
        fetchViewTicketsPerUser();
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
                    {viewTicketPerUser.map(ticket => (
                        <tr key={ticket.ticketID}>
                            <td>
                                <a href={`/tickets/${ticket.TicketID}`} onClick={() => onTicketClick(ticket.TicketID)}>
                                    {ticket.TicketID}
                                </a>
                            </td>
                            <td>{ticket.SeverityName}</td>
                            <td>{new Date(ticket.TicketDateFiled).toLocaleDateString('en-US', { dateStyle: 'short' })}</td>
                            <td>{ticket.IssueTypeName}</td>
                            <td>{ticket.StatusName}</td>
                            <td>{ticket.FirstName + " " + ticket.MiddleName + " " + ticket.LastName}</td>
                            <td>{ticket.ConsultantFirstName + " " + ticket.ConsultantMiddleName + " " + ticket.ConsultantLastName}</td>
                            <td>{calculateTicketAge(ticket.TicketDateFiled)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TicketTable
