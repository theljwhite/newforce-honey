export const getAllTickets = async () => {
  try {
    const serviceResponse = await fetch(
      "http://localhost:8088/serviceTickets?_embed=employeeTickets"
    );

    const serviceTickets = await serviceResponse.json();

    return serviceTickets;
  } catch (error) {
    return null;
  }
};

export const assignEmployeeTicket = async (employeeTicket) => {
  try {
    await fetch("http://localhost:8088/employeeTickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employeeTicket),
    });
  } catch (error) {
    return null;
  }
};

export const updateTicket = async (ticket) => {
  try {
    await fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket),
    });
  } catch (error) {
    return null;
  }
};
