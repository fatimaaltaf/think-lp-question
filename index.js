const EmployeeRoster = require("./employeeRoster");

// Employee roster instance
const myRoster = new EmployeeRoster();

// Employee data
let e1 = myRoster.addEmployee(
  "Fatima",
  "Altaf",
  29,
  "junior dev",
  "engineering",
  "200000"
);

let e2 = myRoster.addEmployee(
  "Dwight",
  "Schrute",
  44,
  "Beet Farmer",
  "Dunder Mifflin",
  "45000"
);

myRoster.terminateEmployee(); // Terminates employee

// console.log(myRoster.getActiveEmployees());

// console.log(myRoster.getTerminatedEmployees(1, "month"));

console.log(myRoster.toString()); // Prints roster of employee e1 and e2
