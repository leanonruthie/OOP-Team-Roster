// Work Reference #1 - Class Activity 10-OOP - 23-Ins_Subclasses

class Employee {
  constructor(name, role, id, email) {
    this.name = name;
    this.role = role; 
    this.id = id;
    this.email = email;
    
  }

  getName() {
    return `Name: ${this.name}`;
  }
  
  getRole() {
    return "Employee"
  }

  getId() {
    return `Id: ${this.id}`;
  }

  getEmail() {
    return `Email: ${this.email}`;
  }

  printInfo(){
    console.log(`This employee's name is ${this.name}, role is ${this.role}, id is ${this.id}, and email is ${this.email}`)
  }
}

module.exports = Employee;
