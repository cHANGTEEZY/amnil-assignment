//-----------------------------------------------
function nothing() {
  return;
}
console.log(nothing());

//-----------------------------------------------
function hello(a, b) {
  a + b;
}

console.log(hello());

//-----------------------------------------------
function greet(name) {
  console.log("Hello, " + name + "!");
  return;
}

let greeting = greet("Bob");
console.log(greeting);
