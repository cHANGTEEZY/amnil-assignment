const json = '{"firstName":"David","lastName":"Lee","age":35}';
const parsedPerson = JSON.parse(json);
console.log(parsedPerson);

console.log(parsedPerson.firstName); // Output: David
console.log(parsedPerson.age); // Output: 35
