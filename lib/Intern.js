// Work Reference #1 - Class Activity 10-OOP - 23-Ins_Subclasses

const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, role, id, email, school) {
    super(name, role, id, email);
    this.role = role;
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern"
  }
}

const Intern = new Intern();
Intern.printInfo();