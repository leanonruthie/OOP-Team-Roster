// Work Reference #1 - Class Activity 10-OOP - 23-Ins_Subclasses

const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, role, id, email, github) {
    super(name, role, id, email);
    this.role = role;
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer"
  }
}

const Engineer = new Engineer();
Engineer.printInfo();