// Work Reference #1 - 01-Activities/24-Stu_Subclasses

const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, role, id, email, github) {
    super(name, role, id, email);
    this.github = github;
  }

  getGithub() {
    return `${this.github}`;
  }

  getRole() {
    return "Engineer";
  }
}

const engineer = new Engineer();

console.log(engineer)