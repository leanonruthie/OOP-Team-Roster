// Work Reference #1 - 01-Activities/24-Stu_Subclasses

const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, role, id, email, office) {
    super(name, role, id, email);
    this.office = office; 
  }

  getOffice() {
    return `${this.office}`;
  }
  getRole() {
    return "Manager";
  }
}

const manager = new Manager();

console.log(manager)