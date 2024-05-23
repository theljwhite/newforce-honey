import { Routes, Route, Outlet } from "react-router-dom";
import { TicketList } from "../components/tickets/TicketList";
import CustomersList from "../components/customers/CustomersList";
import EmployeeList from "../components/employees/EmployeeList";
import EmployeeNav from "../components/nav/EmployeeNav";
import Welcome from "../components/welcome/Welcome";
import CustomerDetails from "../components/customers/CustomerDetails";
import EmployeeDetails from "../components/employees/EmployeeDetails";
import EmployeeForm from "../components/forms/EmployeeForm";

export const EmployeeViews = ({ currentUser }) => {
  return (
    <>
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
          <Route
            path="tickets"
            element={<TicketList currentUser={currentUser} />}
          />
          <Route path="customers">
            <Route index element={<CustomersList />} />
            <Route path=":customerId" element={<CustomerDetails />} />
          </Route>
          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />
          </Route>
          <Route
            path="profile"
            element={<EmployeeForm currentUser={currentUser} />}
          />
        </Route>
      </Routes>
    </>
  );
};
