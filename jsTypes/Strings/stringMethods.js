//? String methods

//? charAt() method
let string = "FIZZ BUZZ";
console.log(string.charAt(2)); // Returns character at index 2 -> "Z"

//? concat() method
let string1 = "Fizz";
let string2 = "Buzz";
let string3 = "Bazz";
console.log(string1.concat(" ", string2)); // "Fizz Buzz"
console.log(string1.concat(string2, string3)); // "FizzBuzzBazz"

//? replace() method
let currentString = "Google";
let newString = currentString.replace("Google", "Amazon");
console.log(newString); // "Amazon"

//? split() method
let sentence = "Hello World";
console.log(sentence.split(" ")); // ["Hello", "World"]
console.log(sentence.split("")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

//? substr() method
let text = "JavaScript";
console.log(text.substr(0, 4)); // "Java"

//? substring() method
console.log(text.substring(0, 4)); // "Java"

//? slice() method
console.log(text.slice(0, 4)); // "Java"
console.log(text.slice(-6)); // "Script"

//? toLowerCase() method
let upperText = "HELLO";
console.log(upperText.toLowerCase()); // "hello"

//? toUpperCase() method
let lowerText = "hello";
console.log(lowerText.toUpperCase()); // "HELLO"

//? trim() method
let spacedString = "   Trim me!   ";
console.log(spacedString.trim()); // "Trim me!"

//? includes() method
let phrase = "Mount everest";
console.log(phrase.includes("quick")); // true
console.log(phrase.includes("mount")); // false

//? search() method
console.log(phrase.search("brown"));
console.log(phrase.search("blue"));
