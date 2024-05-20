export const getAllTickets = async () => {
  try {
    const serviceResponse = await fetch(
      "http://localhost:8088/serviceTickets?_embed=employeeTicket"
    );

    const serviceTickets = await serviceResponse.json();

    return serviceTickets;
  } catch (error) {
    return null;
  }
};
