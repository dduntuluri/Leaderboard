// models/employeeModel.js
let employees = [
  { id: 1, rank: 1, name: 'Akash Manikandan', points: 700 },
  { id: 2, rank: 2, name: 'Ashik Mohammad', points: 650 },
  { id: 3, rank: 3, name: 'Anu L', points: 600 },
  { id: 4, rank: 4, name: 'Ashik Mohammad', points: 581 },
  { id: 5, rank: 5, name: 'Anu L', points: 545 },
  { id: 6, rank: 6, name: 'Ashik Mohammad', points: 515 },
  { id: 7, rank: 7, name: 'Akash Manikandan', points: 500 },
  { id: 8, rank: 8, name: 'Ashik Mohammad', points: 450 }
];

const getAllEmployees = () => employees;

const getEmployeeById = (id) => employees.find(emp => emp.id == id);

const createEmployee = (employee) => {
  const newEmployee = { id: employees.length + 1, ...employee };
  employees.push(newEmployee);
  return newEmployee;
};

const updateEmployee = (id, updatedEmployee) => {
  const employee = employees.find(emp => emp.id == id);
  if (employee) {
      Object.assign(employee, updatedEmployee);
      return employee;
  }
  return null;
};

const deleteEmployee = (id) => {
  const index = employees.findIndex(emp => emp.id == id);
  if (index !== -1) {
      employees.splice(index, 1);
      return true;
  }
  return false;
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};
