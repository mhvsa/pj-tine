

const StudentPrototype = {
  subjects: ["Math", "Enlgish"]
}


const createStudent = (firstName, lastName) => {
  const student = Object.create(StudentPrototype);
  student.firstName = firstName;
  student.lastName = lastName;
  student.id = new Date().getTime() + Math.random() * 1000;
  return student;
}

const studentWithSubjects = createStudent("Bartosz", "Bartoszewicz");

console.log(studentWithSubjects.subjects);
console.log(studentWithSubjects.firstName);
