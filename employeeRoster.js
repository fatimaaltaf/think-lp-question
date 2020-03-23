const Employee = require("./employee");
const moment = require("moment");

// Setup default state for new Employee Roster
class EmployeeRoster {
  constructor() {
    this.roster = {}; //chose object to optimize for add/delete, return list of active employees, and return list of terminated employees
  }

  // Employee instance to create new employee and add to roster
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

  // Remove employee by deleting returned employee ID
  removeEmployee(id) {
    delete this.roster[id];
  }

  // Calls terminate function to change status to terminate
  terminateEmployee(id) {
    this.roster[id].terminate();
  }

  // Loops through employee object and returns only employees with STATUS.ACTIVE
  getActiveEmployees() {
    let activeEmployees = [];

    for (let employeeId in this.roster) {
      if (this.roster[employeeId].status === Employee.status.ACTIVE) {
        activeEmployees.push(this.roster[employeeId]);
      }
    }

    return activeEmployees;
  }

  // Loops through employee object with given number and period of time
  // and returns only employees with STATUS.ACTIVE
  getTerminatedEmployees(number, period) {
    let lowerBound = moment().subtract(number, period);
    //terminatedAt is after lowerBound
    let terminatedEmployees = [];

    for (let employeeId in this.roster) {
      if (
        this.roster[employeeId].status === Employee.status.TERMINATED &&
        this.roster[employeeId].terminatedAt.isAfter(lowerBound)
      ) {
        terminatedEmployees.push(this.roster[employeeId]);
      }
    }

    return terminatedEmployees;
  }

  // Prints out employees in roster
  toString() {
    let output = `${Object.keys(this.roster).length} Employee(s) in Roster\n`;

    for (let employeeId in this.roster) {
      output += `${this.roster[employeeId].toString()}\n`;
    }

    return output;
  }
}

module.exports = EmployeeRoster;
