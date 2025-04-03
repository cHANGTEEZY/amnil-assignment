//Hoisting is a behaviour in javascript where a vairbale of functions are hoisted
//to the top of their scope
//It is done so that a variable or function can be accessed

// Calling the function before declaration (this works due to hoisting)
console.log(add(2, 3)); // Output: 5

// Function Declaration
function add(a, b) {
  return a + b;
}

// This will throw an error because the function is not defined yet
console.log(subtract(5, 3)); // TypeError: subtract is not a function

// Function Expression
var subtract = function (a, b) {
  return a - b;
};

// This will throw an error because arrow functions are not hoisted
console.log(multiply(2, 3)); // TypeError: multiply is not a function

// Arrow Function Expression
var multiply = (a, b) => a * b;

// This will throw an error because `addWithLet` is in the temporal dead zone
console.log(addWithLet(2, 3)); // ReferenceError: Cannot access 'addWithLet' before initialization

// Function Expression using let
let addWithLet = function (a, b) {
  return a + b;
};
