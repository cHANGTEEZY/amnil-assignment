//email validation regex using test method

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("test@example.com")); // true
console.log(emailRegex.test("invalid-email")); // false

const str = "Two donkey twenty monkey ";
console.log(str.match(/et/g)); //null
console.log(str.match(/ke/g));

//text replacement regex using replace method
const text = "I love cats and cats are cute";
console.log(text.replace(/cats/g, "dogs")); // "I love dogs and dogs are cute"

//splitting text based on pattern
const sentence = "apple, orange; banana|grape";
console.log(sentence.split(/[,;|]+/)); // ["apple", "orange", "banana", "grape"]
