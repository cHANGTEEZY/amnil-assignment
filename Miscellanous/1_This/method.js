//inside a function method this refers to the  object that calls the method
const greet = {
  name: "sushank",

  simpleMethod: function () {
    console.log("Hello", this.name);
  },
};

greet.simpleMethod(); //will console hello sushank

//inside arrow function

const arrowFunctionObject = {
  name: "Sushank",
  greet: () => {
    console.log("Hello", this.name);
  },
};

arrowFunctionObject.greet(); //will return undefined

this.name = "Window";

arrowFunctionObject.greet(); //will return hello window
