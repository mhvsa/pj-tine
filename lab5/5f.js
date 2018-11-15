
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