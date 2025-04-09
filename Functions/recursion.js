function factorial(n) {
  if (n === 0) {
    return 1; // base case
  }
  return n * factorial(n - 1); // recursive call
}

console.log(factorial(5)); // 120

function fibonacci(n) {
  if (n <= 1) {
    return n; // base case
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive call
}

console.log(fibonacci(6)); // 8

function sumArray(arr) {
  if (arr.length === 0) {
    return 0; // base case
  }
  return arr[0] + sumArray(arr.slice(1)); // recursive call
}

console.log(sumArray([1, 2, 3, 4])); // 10

function reverseString(str) {
  if (str === "") {
    return ""; // base case
  }
  return reverseString(str.substr(1)) + str[0]; // recursive call
}

console.log(reverseString("hello")); // "olleh"
