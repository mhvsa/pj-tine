// a

const person = {
  name: "Adam Adamowicz",
  age: 25,
  becameOlder: function () {
    this.age += 1;
  },
  introduce: function () {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  }
}

const printObject = (obj) => {
  Object.getOwnPropertyNames(obj).forEach(prop => {
    console.log(`Property: ${prop}, value: ${obj[prop]}, type: ${typeof obj[prop]}`);
  })
}

printObject(person);

// b

function Student(firstName, lastName) {

  this.id = new Date().getTime() + Math.random() * 1000;
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];

  this.print = () => {
    const avg = this.calculateGradeAverage();
    const avgString = avg ? avg : "no grades";
    console.log(`${this.firstName} ${this.lastName}, avg: ${avgString}`);
  }

  this.calculateGradeAverage = () => {
    const len = this.grades.length;
    if (len) {
      const sum = this.grades.reduce((prev, curr) => prev + curr);
      const avg = sum / len;
      return avg;
    } else {
      return undefined;
    }
  }
}
// c
const student = new Student("Adam", "Adamowicz");
student.grades.push(2, 3, 4, 5);
student.print();

const StudentPrototype = {
  subjects: ["Math", "Enlgish"]
}


const createStudent = (firstName, lastName) => {
  const student = new Student(firstName, lastName);
  Object.setPrototypeOf(student, StudentPrototype);
  return student;
}

const studentWithSubjects = createStudent("Bartosz", "Bartoszewicz");

console.log(studentWithSubjects.subjects);
studentWithSubjects.grades.push(5, 5, 4, 3);
studentWithSubjects.print();

// d

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

// e

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

// f

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  };
  set fullName(fullName) {
    let names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  };
}
class StudentPerson extends Person {

  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.grades = [];
  }

  print() {
    const avgString = this.gradeAverage ? this.gradeAverage : "no grades";
    console.log(`${this.firstName} ${this.lastName}, avg: ${avgString}`);
  }

  get gradeAverage() {
    const len = this.grades.length;
    if (len) {
      const sum = this.grades.reduce((prev, curr) => prev + curr);
      const avg = sum / len;
      return avg;
    } else {
      return undefined;
    }
  }
}

const studentPerson = new StudentPerson("Human", "Student");
studentPerson.grades.push(2, 2, 2, 2, 2, 2, 2, 3);
studentPerson.print();