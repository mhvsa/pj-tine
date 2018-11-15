const {Student} = require("./5b");

class StudentClass extends Student {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
  get gradeAverage() {
    return this.calculateGradeAverage();
  };
  get fullName() {
    return this.firstName + " " + this.lastName;
  };
  set fullName(fullName) {
    let names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  };
}

const studentCreatedWithClass = new StudentClass("Iza", "Izowicz");
studentCreatedWithClass.print();
console.log(studentCreatedWithClass.fullName);
