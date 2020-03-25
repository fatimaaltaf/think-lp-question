const Employee = require("./employee");
const moment = require("moment");

// EmployeeRoster class manages collection of employees
class EmployeeRoster {
  // Setup default state for new EmployeeRoster instances
  constructor() {
    this.roster = {};
  }

  // Creates new Employee instance and adds to roster
  addEmployee(firstName, lastName, age, jobTitle, department, salary) {
    let newEmployee = new Employee(
      firstName,
      lastName,
      age,
      jobTitle,
      department,
      salary
    );
    this.roster[newEmployee.id] = newEmployee;
    return newEmployee;
  }

  // Remove Employee from roster by Employee ID
  removeEmployee(id) {
    delete this.roster[id];
  }

  // Terminate Employee from roster by Employee ID
  terminateEmployee(id) {
    this.roster[id].terminate();
  }

  // Returns an array of active Employees
  getActiveEmployees() {
    let activeEmployees = [];

    for (let employeeId in this.roster) {
      if (this.roster[employeeId].status === Employee.status.ACTIVE) {
        activeEmployees.push(this.roster[employeeId]);
      }
    }

    return activeEmployees;
  }

  // Return all Employees that are terminated after the given period
  getTerminatedEmployees(number, period) {
    // Current time subtracting from the given period
    let lowerBound = moment().subtract(number, period);
    let terminatedEmployees = [];

    for (let employeeId in this.roster) {
      // Make sure Employee status is terminated and the terminated date is after the lowerBound
      if (
        this.roster[employeeId].status === Employee.status.TERMINATED &&
        this.roster[employeeId].terminatedAt.isAfter(lowerBound)
      ) {
        terminatedEmployees.push(this.roster[employeeId]);
      }
    }

    return terminatedEmployees;
  }

  // Returns string representation of EmployeeRoster
  toString() {
    let output = `${Object.keys(this.roster).length} Employee(s) in Roster\n`;

    for (let employeeId in this.roster) {
      output += `${this.roster[employeeId].toString()}\n`;
    }

    return output;
  }
}

module.exports = EmployeeRoster;
