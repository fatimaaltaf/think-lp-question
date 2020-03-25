const uuidv4 = require("uuid").v4; // Random ID generator
const moment = require("moment");

class Employee {
  // Setup default state for new Employee instances
  constructor(firstName, lastName, age, jobTitle, department, salary) {
    this.id = uuidv4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobTitle = jobTitle;
    this.department = department;
    this.salary = salary;
    this.status = Employee.status.ACTIVE;
    this.jobType = Employee.jobTypes.FULLTIME;
    this.createdAt = moment();
    this.terminatedAt = null;
  }

  // Sets employee termination time and status to terminated
  terminate() {
    this.status = Employee.status.TERMINATED;
    this.terminatedAt = moment();
  }

  //Print out string representation of employee
  toString() {
    return `Name: ${this.firstName} ${this.lastName} || Status: ${this.status} || Title: ${this.jobTitle} || Department: ${this.department}`;
  }
}

// Class constants
Employee.jobTypes = {
  FULLTIME: "FULL-TIME",
  PARTTIME: "PART-TIME",
  CONTRACT: "CONTRACTOR"
};

Employee.status = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  TERMINATED: "TERMINATED"
};

module.exports = Employee;
