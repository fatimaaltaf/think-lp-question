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
  "Dwight",
  "Schrute",
  44,
  "Assistant to the Regional Manager",
  "Dunder Mifflin",
  "45000"
);

let e3 = myRoster.addEmployee(
  "Michael",
  "Scott",
  44,
  "Regional Manager",
  "Dunder Mifflin",
  "60000"
);

let e4 = myRoster.addEmployee(
  "Toby",
  "Scott",
  44,
  "HR",
  "Dunder Mifflin",
  "60000"
);

myRoster.terminateEmployee(e4.id); // Terminates employee

console.log(myRoster.getActiveEmployees());

console.log(myRoster.getTerminatedEmployees(1, "month")); // Get terminated Employees up to one month ago

// console.log(myRoster.toString()); // Prints roster of employee e1 and e2
