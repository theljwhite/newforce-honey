import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

export default function CustomerNav() {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link className="navbar-link" to="/tickets">
          Tickets
        </Link>
      </li>
      {localStorage.getItem("honey_user") && (
        <li className="navbar-item navbar-logout">
          <Link
            onClick={() => {
              localStorage.removeItem("honey_user");
              navigate("/", { replace: true });
            }}
            className="navbar-link"
            to=""
          >
            Logout
          </Link>
        </li>
      )}
    </ul>
  );
}
