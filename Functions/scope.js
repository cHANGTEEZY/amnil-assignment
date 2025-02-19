// In javascript we have three scopes
// Global scope
// Local scope
// Block scope

//example 1
//Variable declared in global scope are accessible
//from anywhere in the code

// Global Scope
let globalVar = "I am global";

function exampleFunction() {
  // Local Scope
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}

exampleFunction();

if (true) {
  // Block Scope (let & const)
  let blockScopedVar = "I am block-scoped";
  const blockScopedConst = "I am also block-scoped";
  var functionScopedVar = "I am function-scoped";
  console.log(blockScopedVar);
}

console.log(functionScopedVar);
