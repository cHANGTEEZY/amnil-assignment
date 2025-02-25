//? String methods

//? charAt() method
let fizzBuzzString = "FIZZ BUZZ";
console.log("Using charAt() method:");
console.log(fizzBuzzString.charAt(2)); //* Returns character at index 2 -> "Z"

//? concat() method
let stringA = "Fizz";
let stringB = "Buzz";
let stringC = "Bazz";
console.log("\nUsing concat() method:");
console.log(stringA.concat(" ", stringB)); //* "Fizz Buzz"
console.log(stringA.concat(stringB, stringC)); //* "FizzBuzzBazz"

//? replace() method
let currentWord = "Google";
let newWord = currentWord.replace("Google", "Amazon");
console.log("\nUsing replace() method:");
console.log(newWord); //* "Amazon"

//? split() method
let sentence = "Hello World";
console.log("\nUsing split() method:");
console.log(sentence.split(" ")); //* ["Hello", "World"]
console.log(sentence.split("")); //* ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
console.log(sentence.split(",")); //* ["Hello World"]
console.log(sentence.split("", 5)); //* ["H", "e", "l", "l", "o"];
console.log(sentence.split(" ", 1)); //* ["Hello"]

//? substr() substring() slice() method
let helloWorldStr = "Hello, World!";

console.log("\nUsing substr() method:");
console.log(helloWorldStr.substr(7, 5)); //* "World" (Starts at index 7 and takes 5 characters)
console.log(helloWorldStr.substr(-6, 5)); //* "World" (Starts 6 from the end, takes 5)
console.log(helloWorldStr.substr(7)); //* "World!" (Takes all characters from index 7)
console.log(helloWorldStr.substr(0, 5)); //* "Hello" (Takes first 5 characters)
console.log(helloWorldStr.substr(7, -2)); //! "" (Negative length returns empty string)

console.log("\nUsing substring() method:");
console.log(helloWorldStr.substring(7, 12)); //* "World" (Characters from index 7 to 11)
console.log(helloWorldStr.substring(12, 7)); //* "World" (start > end → swapped) this process is done internally
console.log(helloWorldStr.substring(-6, 5)); //* "Hello" (Negative is treated as 0)
console.log(helloWorldStr.substring(7)); //* "World!" (Extracts till end)
console.log(helloWorldStr.substring(0, helloWorldStr.length)); //* "Hello, World!" (Full string)

console.log("\nUsing slice() method:");
console.log(helloWorldStr.slice(7, 12)); //* "World" (Characters from index 7 to 11)
console.log(helloWorldStr.slice(-6, -1)); //* "World" (Negative values count from end)
console.log(helloWorldStr.slice(-6)); //* "World!" (Extracts from -6 to end)
console.log(helloWorldStr.slice(7)); //* "World!" (Extracts from index 7 to end)
console.log(helloWorldStr.slice(0, helloWorldStr.length)); //* "Hello, World!" (Full string)

//? toLowerCase() and toUpperCase() method
let lowercaseStr = "hello world";
let uppercaseStr = "HELLO WORLD";
console.log("\nUsing toLowerCase() and toUpperCase() method:");
console.log(lowercaseStr.toUpperCase()); //* "HELLO WORLD"
console.log(uppercaseStr.toLowerCase()); //* "hello world"

//? trim()
let stringWithSpaces = "   Hello, World!   ";
let stringWithoutSpaces = "Hello, World";
let stringWithSpacesInMiddle = "Hello,       World";
console.log("\nUsing trim() method:");
console.log(stringWithSpaces.trim()); //* "Hello, World"
console.log(stringWithoutSpaces.trim()); //* "Hello, World"
console.log(stringWithSpacesInMiddle.trim()); //* Hello,       World

//? includes()
let story = "Once upon a time";
console.log("\nUsing includes() method:");
console.log(story.includes("once")); //! false (case sensitive)
console.log(story.includes("Once")); //* true
console.log(story.includes("")); //* true (empty string is always included)
console.log(story.includes(" ")); //* true (contains space)
console.log(story.includes("o", 10)); //* false (no "o" after index 10)
console.log(story.includes("o", 2)); //* true (contains "o" after index 2)

//? search()
let story2 = "Mayday Emergency Rescue";
console.log("\nUsing search() method:");
console.log(story2.search("M")); //* 0 (M is at index 0)
console.log(story2.search("Mayday")); //* 0 (Mayday starts at index 0)
console.log(story2.search("day")); //* 3 (day starts at index 3)
console.log(story2.search("Emergency")); //* 7 (Emergency starts at index 7)
console.log(story2.search("Rescue")); //* 17 (Rescue starts at index 17)
