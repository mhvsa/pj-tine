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
