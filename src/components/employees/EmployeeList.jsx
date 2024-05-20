import { useState, useEffect } from "react";
import { getStaffUsers } from "../../services/userService";
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
    <div className="customers">
      {employees.map((employee) => {
        return <Employee key={employee.id} employee={employee} />;
      })}
    </div>
  );
}
