import { useNavigate } from "react-router-dom";

export default function TicketFilter({
  searchEntry,
  setSearchEntry,
  setShowEmergencyOnly,
  currentUser,
  setOpenOnlyTickets,
}) {
  const navigate = useNavigate();

  return (
    <div className="filter-bar">
      {currentUser.isStaff ? (
        <>
          <button
            className="filter-btn btn-primary"
            onClick={() => setShowEmergencyOnly(true)}
          >
            Emergency
          </button>
          <button
            className="filter-btn btn-secondary"
            onClick={() => setShowEmergencyOnly(false)}
          >
            Show All
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => navigate("/tickets/create")}
            className="filter-btn btn-primary"
          >
            Create Ticket
          </button>
          <button
            onClick={() => setOpenOnlyTickets(true)}
            className="filter-btn btn-info"
          >
            Open Tickets
          </button>
          <button
            onClick={() => setOpenOnlyTickets(false)}
            className="filter-btn btn-secondary"
          >
            All My Tickets
          </button>
        </>
      )}
      <input
        type="text"
        placeholder="Search Tickets"
        className="ticket-search"
        value={searchEntry}
        onChange={(e) => setSearchEntry(e.target.value)}
      />
    </div>
  );
}
