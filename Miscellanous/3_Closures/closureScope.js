//method 1 of sending argument to inner function

let globalVariable = " global variable!";

function outerFunction(outerVariable) {
  let outerVar = outerVariable;

  function innerFunction(innerVariable) {
    let innerVar = innerVariable;

    console.log(globalVariable);
    console.log(outerVar);
    console.log(innerVar);
  }

  return innerFunction;
}

const closureFunc = outerFunction("outer function;s variable");

closureFunc("I'm from the inner function!");

//method 2 of sending argument to inner fucntion

function outFunction() {
  let outerVariable = "I'm from the outer function!";

  function inFunction(innerVariable) {
    console.log(outerVariable);
    console.log(innerVariable);
  }

  inFunction("I'm from the inner function!");
}

outFunction();
