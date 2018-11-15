const { Student } = require("./5b");

Student.prototype = {
  get gradeAverage() {
    return this.calculateGradeAverage();
  },
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(fullName) {
    let names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const fullNameStudent = new Student("Krzysztof", "Ibisz");
console.log(fullNameStudent.fullName);
fullNameStudent.fullName = "Maciej Maciejewski";
console.log(fullNameStudent.fullName);
fullNameStudent.grades.push(3, 3, 4);
console.log(fullNameStudent.gradeAverage);

fullNameStudent.print();