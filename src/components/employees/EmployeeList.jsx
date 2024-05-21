import { useState, useEffect } from "react";
import { getStaffUsers } from "../../services/userService";
import { Link } from "react-router-dom";
import Employee from "./Employee";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    callGetEmployees();
  }, []);

  const callGetEmployees = async () => {
    const employees = await getStaffUsers();
    setEmployees(employees);
  };

  return (
    <div className="employees">
      {employees.map((employee) => {
        return (
          <Link key={employee.id} to={`/employees/${employee.id}`}>
            <Employee key={employee.id} employee={employee} />
          </Link>
        );
      })}
    </div>
  );
}
