import { useState, useEffect } from "react";
import { getAllExployees } from "../../services/employeesService";
import {
  assignEmployeeTicket,
  deleteTicket,
  updateTicket,
} from "../../services/ticketService";

export default function Ticket({ ticket, currentUser, callGetTickets }) {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    callGetAllEmployees();
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket?.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  const callGetAllEmployees = async () => {
    const employees = await getAllExployees();
    setEmployees(employees);
  };

  const handleClaim = async () => {
    const currentEmployee = employees.find(
      (employee) => employee.userId === currentUser.id
    );
    const newEmployeeTicket = {
      employeeId: currentEmployee.id,
      serviceTicketId: ticket.id,
    };

    await assignEmployeeTicket(newEmployeeTicket);
    await callGetTickets();
  };

  const handleClose = async () => {
    const closedTicket = {
      ...ticket,
      dateCompleted: new Date(),
    };
    await updateTicket(closedTicket);
    await callGetTickets();
  };

  const handleDelete = async () => {
    await deleteTicket(ticket.id);
    await callGetTickets();
  };

  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">
            {assignedEmployee ? assignedEmployee?.user?.fullName : "None"}
          </div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {currentUser.isStaff && !assignedEmployee && (
            <button onClick={handleClaim} className="btn btn-secondary">
              Claim
            </button>
          )}

          {assignedEmployee?.userId === currentUser.id &&
            !ticket.dateCompleted && (
              <button onClick={handleClose} className="btn btn-warning">
                Close
              </button>
            )}
          {!currentUser.isStaff && (
            <button onClick={handleDelete} className="btn btn-warning">
              Delete
            </button>
          )}
        </div>
      </footer>
    </section>
  );
}
