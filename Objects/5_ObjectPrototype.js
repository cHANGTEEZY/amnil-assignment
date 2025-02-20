// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello ${this.name}`);
// };

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const person1 = new Person("Ram");
const person2 = new Person("Hari");
person1.greet();
person2.greet();
