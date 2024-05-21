import { useState, useEffect } from "react";
import { getNonStaffUsers } from "../../services/userService";
import { Link } from "react-router-dom";
import "./Customers.css";
import User from "../../users/User";

export default function CustomersList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    callGetUsers();
  }, []);

  const callGetUsers = async () => {
    const users = await getNonStaffUsers();
    setCustomers(users);
  };

  return (
    <div className="customers">
      {customers.map((customer) => {
        return (
          <Link key={customer.id} to={`/customers/${customer.id}`}>
            <User user={customer} />;
          </Link>
        );
      })}
    </div>
  );
}
