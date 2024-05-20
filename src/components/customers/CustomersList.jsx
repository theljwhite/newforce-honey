import { useState, useEffect } from "react";
import { getNonStaffUsers } from "../../services/userService";
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
        return <User key={customer.id} user={customer} />;
      })}
    </div>
  );
}
