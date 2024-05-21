import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../services/employeesService";
import "./Employee.css";

export default function EmployeeDetails() {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    const employee = await getEmployeeById(employeeId);
    setEmployee(employee[0]);
  };

  return (
    <div>
      <div>{employee?.user?.fullName}</div>
      <div>{employee?.email}</div>
      <div>{employee?.specialty}</div>
      <div>{employee?.rate}</div>
      <div>
        Currently working on {employee?.employeeTickets?.length} tickets
      </div>
    </div>
  );
}
