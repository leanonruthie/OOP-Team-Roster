// Work Reference #1 - 01-Activities/24-Stu_Subclasses

const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  
  getGithub() {
    return this.github;
  }

  
}

module.exports = Engineer;