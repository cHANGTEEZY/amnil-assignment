//Hoisting is a behaviour in javascript where a vairbale of functions are hoisted
//to the top of their scope
//It is done so that a variable or function can be accessed

greet(); // ✅ Works because function declarations are hoisted

function greet() {
  console.log("Hello, world!");
}

console.log(a);
var a = 10;

console.log(b);
let b = 20;

console.log(c);
const c = 30;

hello();
var hello = function () {
  console.log("Hello!");
};
