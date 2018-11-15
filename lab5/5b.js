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

const student = new Student("Adam", "Adamowicz");

student.grades.push(2, 3, 4, 5);
student.print();

module.exports = {
  Student
}