import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/tickets">Tickets</Link>
      </li>
      <li className="navbar-item">
        <Link to="/customers">Customers</Link>
      </li>
      <li className="navbar-item">
        <Link to="/employees">Employees</Link>
      </li>
      {localStorage.getItem("honey_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            onClick={() => {
              localStorage.removeItem("honey_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        <span></span>
      )}
    </ul>
  );
}
