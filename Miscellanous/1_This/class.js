//this in class method
class Person {
  constructor(name) {
    this.name = name; //this refers to the instance
  }

  print() {
    console.log("Hello", this.name); //here the this.name refers to the name property of constructor
  }
}

const newPerson = new Person("sushank");

newPerson.print();

//this in arrow function inside class
class ArrowExample {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log("Welcome", this.name);
  };
}

const test = new ArrowExample("Sushank");
test.greet();
