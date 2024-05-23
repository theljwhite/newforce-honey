import { useState, useEffect } from "react";
import { getAllTickets } from "../../services/ticketService";
import Ticket from "./Ticket";
import "./Ticket.css";
import TicketFilter from "./TicketFilter";

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [openOnlyTickets, setOpenOnlyTickets] = useState([]);
  const [searchEntry, setSearchEntry] = useState("");

  useEffect(() => {
    callGetTickets();
  }, [currentUser.id]);

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      );
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]);

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchEntry.toLowerCase())
    );
    setFilteredTickets(foundTickets);
  }, [searchEntry, allTickets]);

  useEffect(() => {
    if (openOnlyTickets) {
      const openTickets = allTickets.filter((ticket) => !ticket.dateCompleted);
      setFilteredTickets(openTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [openOnlyTickets, allTickets]);

  const callGetTickets = async () => {
    const tickets = await getAllTickets();
    console.log("t", tickets);
    if (currentUser.isStaff) {
      setAllTickets(tickets);
    } else {
      const customerTickets = tickets.filter(
        (ticket) => ticket.userId === currentUser.id
      );
      setAllTickets(customerTickets);
    }
  };

  return (
    <>
      <div className="tickets-container">
        <h2>Tickets</h2>
        <TicketFilter
          searchEntry={searchEntry}
          setSearchEntry={setSearchEntry}
          setShowEmergencyOnly={setShowEmergencyOnly}
          setOpenOnlyTickets={setOpenOnlyTickets}
          currentUser={currentUser}
        />
        <article className="tickets">
          {filteredTickets.map((ticket) => {
            return (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                currentUser={currentUser}
                callGetTickets={callGetTickets}
              />
            );
          })}
        </article>
      </div>
    </>
  );
};
