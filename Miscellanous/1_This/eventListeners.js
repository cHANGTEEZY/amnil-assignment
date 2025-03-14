const button = document.getElementById("button");

//using normal function
button.addEventListener("click", function () {
  console.log("click event in function");
  console.log(this);
});

//using arrow function
button.addEventListener("click", () => {
  console.log("click event in arrow function");
  console.log(this);
});

// this and event  inside class using normal function
class Hello {
  constructor(name) {
    this.name = name;
    button.addEventListener("click", function () {
      console.log("hello", this.name);
    });
  }
}

new Hello("Sushank");

//this and event inside class using arrow function
class Greet {
  constructor(name) {
    this.name = name;
    button.addEventListener("click", () => {
      console.log("hello", this.name);
    });
  }
}

new Greet("sushank");
