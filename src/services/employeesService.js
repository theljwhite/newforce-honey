export const getAllExployees = async () => {
  const response = await fetch("http://localhost:8088/employees?_expand=user");
  const employees = await response.json();

  return employees;
};
