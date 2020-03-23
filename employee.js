const uuidv4 = require("uuid").v4; // Random ID generator
const moment = require("moment");

class Employee {
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

  terminate() {
    this.status = Employee.status.TERMINATED;
    this.terminatedAt = moment();
  }

  // FORMAT THIS
  toString() {
    //print out an employee
    return `Name: ${this.firstName} ${this.lastName} \nStatus: ${this.status} \nAge:${this.age} \nTitle: ${this.jobTitle} \nDepartment: ${this.department} \nSalary: ${this.salary}`;
  }
}

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
// 1. Add / remove employees
// 2. Return a list of active employees
// 3. Return a list of terminated employees in the last month
