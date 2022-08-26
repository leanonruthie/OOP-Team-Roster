// Work Reference #1 - Class Activity 10-OOP - 23-Ins_Subclasses

class Employee {
    constructor(area, perimeter) {
      this.area = area;
      this.perimeter = perimeter;
    }
  
    printInfo() {
      console.log(`Area: ${this.area}`);
      console.log(`Perimeter: ${this.perimeter}`);
    }
  }
  
  module.exports = Employee;
  