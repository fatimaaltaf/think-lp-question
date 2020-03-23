const EmployeeRoster = require("./employeeRoster");

const myRoster = new EmployeeRoster();

let e1 = myRoster.addEmployee(
  "Fatima",
  "Altaf",
  29,
  "junior dev",
  "engineering",
  "200000"
);

let e2 = myRoster.addEmployee(
  "Bob",
  "Juju",
  29,
  "Pilot",
  "All Star",
  "10000000"
);

myRoster.terminateEmployee(e1.id);

// console.log(myRoster.getActiveEmployees());

console.log(myRoster.getTerminatedEmployees(1, "month"));

console.log(myRoster.toString());
