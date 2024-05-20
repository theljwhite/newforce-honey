import { useState, useEffect } from "react";
import { getAllTickets } from "../../services/ticketService";
import Ticket from "./Ticket";
import "./Ticket.css";
import TicketFilter from "./TicketFilter";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchEntry, setSearchEntry] = useState("");

  useEffect(() => {
    callGetTickets();
  }, []);

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
    const foundTickers = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchEntry.toLowerCase())
    );
    setFilteredTickets(foundTickers);
  }, [searchEntry, allTickets]);

  const callGetTickets = async () => {
    const tickets = await getAllTickets();
    setAllTickets(tickets);
  };

  return (
    <>
      <div className="tickets-container">
        <h2>Tickets</h2>
        <TicketFilter
          searchEntry={searchEntry}
          setSearchEntry={setSearchEntry}
          setShowEmergencyOnly={setShowEmergencyOnly}
        />
        <article className="tickets">
          {filteredTickets.map((ticket) => {
            return <Ticket key={ticket.id} ticket={ticket} />;
          })}
        </article>
      </div>
    </>
  );
};
