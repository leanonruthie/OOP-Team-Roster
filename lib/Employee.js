// Work Reference #1 - 01-Activities/24-Stu_Subclasses

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    
  }

  getName() {
    return this.name;
  }
  
  getRole() {
    return "Employee"
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = Employee;
