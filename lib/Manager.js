// Work Reference #1 - Class Activity 10-OOP - 23-Ins_Subclasses

const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, role, id, email, office) {
    super(name, role, id, email);
    this.role = role;
    this.office = office;
  }

  getOffice() {
    return this.office;
  }

  getRole() {
    return "Manager"
  }
}

const Manager = new Manager();
Manager.printInfo();