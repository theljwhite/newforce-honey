export const getAllExployees = async () => {
  const response = await fetch("http://localhost:8088/employees?_expand=user");
  const employees = await response.json();

  return employees;
};

export const getEmployeeById = async (id) => {
  const response = await fetch(
    `http://localhost:8088/employees?userId=${id}&_expand=user&_embed=employeeTickets`
  );
  const employee = await response.json();
  return employee;
};
