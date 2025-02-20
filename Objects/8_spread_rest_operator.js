// Spread Operator Examples
console.log("1. Spread operator with arrays:");
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', ...fruits, 'mango'];
console.log(moreFruits); // ['orange', 'apple', 'banana', 'mango']

console.log("\n2. Spread operator with objects:");
const person = {
    name: 'John',
    age: 30
};
const extendedPerson = {
    ...person,
    profession: 'developer',
    country: 'USA'
};
console.log(extendedPerson);

console.log("\n3. Spread operator in function arguments:");
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // 5

// Rest Operator Examples
console.log("\n4. Rest operator in function parameters:");
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

console.log("\n5. Rest operator in array destructuring:");
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(first);      // 1
console.log(second);     // 2
console.log(remaining);  // [3, 4, 5]

console.log("\n6. Rest operator in object destructuring:");
const employee = {
    name: 'Sarah',
    age: 28,
    position: 'Manager',
    department: 'Sales',
    salary: 50000
};
const { name, age, ...employeeDetails } = employee;
console.log(name);             // Sarah
console.log(age);              // 28
console.log(employeeDetails);  // {position: 'Manager', department: 'Sales', salary: 50000}
