import { useState, useEffect } from "react";
import { getAllExployees } from "../../services/employeesService";

export default function Ticket({ ticket }) {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    callGetAllEmployees();
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket?.employeeTicket[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  const callGetAllEmployees = async () => {
    const employees = await getAllExployees();
    setEmployees(employees);
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
      </footer>
    </section>
  );
}
