//window is an object
console.log(typeof window);

//this refers to window in global scope
console.log(this === window); //true

//assigning value using . notation since window is an object
this.globalVar = "Hello from global";

//accessing the value using . notation
console.log(window.globalVar);
