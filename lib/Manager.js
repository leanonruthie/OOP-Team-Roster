// Work Reference #1 - 01-Activities/24-Stu_Subclasses

const Employee = require('./Employee');

class Manager extends Employee {
  constructor(office) {
    super(role);
    this.office = office; 
    this.role = role;
  }

  getOffice() {
    return `${this.office}`;
  }
  getRole() {
    return "Manager"
  }
}
  
const manager = new Manager();