//? Strings are immutable

let string1 = "Hello";
string1[0] = "g"; //this fails due to immutable nature of string
string1 = "hello"; //this will reassign the varible and creates a new reference
console.log(string1); //output hello

//? Strings are casesensitive

let string2 = "Hello";

console.log(string1 == string2);
