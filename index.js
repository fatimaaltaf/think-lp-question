const EmployeeRoster = require("./employeeRoster");

// Create new EmployeeRoster instance
const myRoster = new EmployeeRoster();

// Sample Employee Data
let e1 = myRoster.addEmployee(
  "Fatima",
  "Altaf",
  29,
  "Junior Developer",
  "Engineering",
  "200000"
);

let e2 = myRoster.addEmployee(
  "Michael",
  "Scott",
  51,
  "Regional Manager",
  "Dunder Mifflin",
  "60000"
);

let e3 = myRoster.addEmployee(
  "Dwight",
  "Schrute",
  42,
  "Assistant to the Regional Manager",
  "Dunder Mifflin",
  "45000"
);

let e4 = myRoster.addEmployee(
  "Toby",
  "Flenderson",
  47,
  "HR Manager",
  "Dunder Mifflin",
  "80000"
);

myRoster.terminateEmployee(e4.id); // Terminates employee

// console.log(myRoster.getActiveEmployees());

// console.log(myRoster.getTerminatedEmployees(1, "month")); // Get terminated Employees up to one month ago

console.log(myRoster.toString()); // Prints roster of employees
