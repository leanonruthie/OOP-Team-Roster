// Work Reference #1 - 01-Activities/24-Stu_Subclasses

const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(github) {
    super(role);
    this.github = github;
    this.role = role;
  }

  getGithub() {
    return `${this.github}`;
  }

  getRole() {
    return "Engineer"
  }
}

const engineer = new Engineer();