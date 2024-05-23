import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";
import { createTicket } from "../../services/ticketService";

export default function TicketForm({ currentUser }) {
  const [description, setDescription] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);

  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();

    if (!description) window.alert("Please fill out a description");

    const newTicket = {
      userId: currentUser.id,
      dateCompleted: "",
      emergency: isEmergency,
      description,
    };

    await createTicket(newTicket);
    navigate("/tickets");
  };

  return (
    <form>
      <h2>New Service Ticket</h2>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description of problem"
            type="text"
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>
            Emergency
            <input
              onChange={(e) => setIsEmergency(e.target.checked)}
              type="checkbox"
            />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button onClick={handleSave} className="form-btn btn-info">
            Submit Ticket
          </button>
        </div>
      </fieldset>
    </form>
  );
}
