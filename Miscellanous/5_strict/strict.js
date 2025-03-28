x = 3.14; // This will not cause an error.
console.log(x);
myFunction();

function myFunction() {
  "use strict";
  y = 3.14; // This will cause an error
}
