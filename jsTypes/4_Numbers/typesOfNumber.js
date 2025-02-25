let integer = 10; //* Integer
let negativeInteger = -10; //* Negative Integer
let float = 3.14; //* Float
let negativeNum = -5.2; //* Negative floating-point number
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;

console.log(positiveInfinity); //* Infinity
console.log(negativeInfinity); //* -Infinity

//? Infinity
console.log(1 / 0); //* Output: Infinity
console.log(Infinity + 1); //* Output: Infinity
console.log(Infinity * 10); //* Output: Infinity
console.log(Infinity === Infinity); //* Output: true
console.log(isFinite(Infinity)); //* Output: false
console.log(1 / Infinity); //* 0
console.log(1 / 0); //* Infinity

//? NAN

let num = 4 - "hello";
let nan = NaN;
console.log(num); //* NaN
console.log(num / 0); //* NaN
console.log(nan); //* NaN

let numbers = [10, 20, "hello", 40, NaN, 60];

let validNumbers = numbers.filter((num) => !isNaN(num)); // Filter out NaN values
console.log(validNumbers); // Output: [10, 20, 40, 60]
