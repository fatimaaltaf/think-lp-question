const Employee = require("./employee");
const moment = require("moment");

class EmployeeRoster {
  constructor() {
    this.roster = {}; //chose object to optimize for add/delete but meh..
  }

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

  removeEmployee(id) {
    delete this.roster[id];
  }

  terminateEmployee(id) {
    this.roster[id].terminate();
  }

  getActiveEmployees() {
    //loop through object and return only objects with STATUS.ACTIVE
    let activeEmployees = [];

    for (let employeeId in this.roster) {
      if (this.roster[employeeId].status === Employee.status.ACTIVE) {
        activeEmployees.push(this.roster[employeeId]);
      }
    }

    return activeEmployees;
  }

  getTerminatedEmployees(number, period) {
    let lowerBound = moment().subtract(number, period);
    //terminatedAt is after lowerBound

    //loop through object and return only objects with STATUS.TERMINATED
    //if start date given, then find ones with STATUS TERMINATED and terminatedAt is greater than startDate

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

  toString() {
    let output = `${Object.keys(this.roster).length} Employee(s) in Roster\n`;

    for (let employeeId in this.roster) {
      output += `${this.roster[employeeId].toString()}\n`;
    }

    return output;
  }
}

module.exports = EmployeeRoster;
