import { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { TicketList } from "../components/tickets/TicketList";
import CustomersList from "../components/customers/CustomersList";
import EmployeeList from "../components/employees/EmployeeList";
import Navbar from "../components/nav/Navbar";
import Welcome from "../components/welcome/Welcome";
import CustomerDetails from "../components/customers/CustomerDetails";
import EmployeeDetails from "../components/employees/EmployeeDetails";

export const ApplicationViews = () => {
  const [_, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUser = JSON.parse(localHoneyUser);
    setCurrentUser(honeyUser);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers">
          <Route index element={<CustomersList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
