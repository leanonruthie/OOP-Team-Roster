// Work Reference #1 - Class Activity 10-OOP - 23-Ins_Subclasses

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return `Name: ${this.name}`;
    }

    getId(){
      console.log(`Id: ${this.id}`);
    }
    
    getEmail(){
      console.log(`Email: ${this.email}`);
    }

    getRole(){
      console.log(`Role: ${this.Role}`)
    }
  }
  
  module.exports = Employee;
  