import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";
import {
  getEmployeeById,
  updateEmployee,
} from "../../services/employeesService";

export default function EmployeeForm({ currentUser }) {
  const [employee, setEmployee] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    callGetEmployee();
  }, [currentUser, setEmployee]);

  const callGetEmployee = async () => {
    const [employeeObj] = await getEmployeeById(currentUser.id);
    setEmployee(employeeObj);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await updateEmployee(employee);
    navigate(`/employees/${currentUser.id}`);
  };

  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Specialty:</label>
          <input
            placeholder={employee?.specialty}
            onChange={(e) =>
              setEmployee({ ...employee, specialty: e.target.value })
            }
            className="form-control"
            required
            type="text"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Hourly Rate:</label>
          <input
            placeholder={employee?.rate}
            onChange={(e) => setEmployee({ ...employee, rate: e.target.value })}
            type="number"
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button onClick={handleSave} className="form-btn btn-primary">
            Save Profile
          </button>
        </div>
      </fieldset>
    </form>
  );
}
