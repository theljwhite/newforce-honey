export default function TicketFilter({
  searchEntry,
  setSearchEntry,
  setShowEmergencyOnly,
}) {
  return (
    <div className="filter-bar">
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
