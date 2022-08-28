// Work Reference #1 - 01-Activities/24-Stu_Subclasses

const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school) {
    super(role);
    this.school = school;
    this.role = role;
  }

  getSchool() {
    return `${this.school}`;
  }

  getRole() {
    return "Intern"
  }
}

const intern = new Intern();