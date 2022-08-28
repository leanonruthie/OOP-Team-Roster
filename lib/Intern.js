// Work Reference #1 - 01-Activities/24-Stu_Subclasses

const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, role, id, email, school) {
    super(name, role, id, email);
    this.school = school;
  }

  getSchool() {
    return `${this.school}`;
  }

  getRole() {
    return "Intern";
  }
}


const intern = new Intern();

console.log(intern)