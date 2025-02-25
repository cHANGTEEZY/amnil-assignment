//? isNaN()
let validNum = 123;
let invalidNum = "Hello";
let nanValue = NaN;

console.log("Using isNaN() method:");
console.log(isNaN(validNum)); //! false (123 is a valid number)
console.log(isNaN(invalidNum)); //* true (the string "Hello" is not a valid number)
console.log(isNaN(nanValue)); //* true (NaN is not a valid number)

//? Number.isInteger()
let intNum = 10;
let floatNum = 10.5;

console.log("\nUsing Number.isInteger() method:");
console.log(Number.isInteger(intNum)); //* true (10 is an integer)
console.log(Number.isInteger(floatNum)); //! false (10.5 is not an integer)

//? Number.isSafeInteger()
let safeInt = 123;
let unsafeInt = 100007199254740993888; // The smallest unsafe integer

console.log("\nUsing Number.isSafeInteger() method:");
console.log(Number.isSafeInteger(safeInt)); //* true (123 is a safe integer)
console.log(Number.isSafeInteger(unsafeInt)); //! false (9007199254740993 is unsafe)

//? toLocaleString()
let number = 1234567.89;

console.log("\nUsing toLocaleString() method:");
console.log(number.toLocaleString()); //* "1,234,567.89" (local formatting with commas for thousands)
console.log(number.toLocaleString("ne-NP")); //* (formatted to Nepali format)

//? toExponential()
let num1 = 12345;
let num2 = 0.00012345;

console.log("\nUsing toExponential() method:");
console.log(num1.toExponential(2)); //* "1.23e+4" (number formatted to 2 decimal places in exponential form)
console.log(num2.toExponential(3)); //* "1.235e-4" (number formatted to 3 decimal places in exponential form)

//? Number.isFinite()
let finiteNum = 100;
let infiniteNum = Infinity;

console.log("\nUsing Number.isFinite() method:");
console.log(Number.isFinite(finiteNum)); //* true (100 is finite)
console.log(Number.isFinite(infiniteNum)); //! false (Infinity is not finite)

//? parseInt()
let stringInt = "123";
let floatStringg = "123.123";
let stringWithLetters = "123abc";

console.log("\nUsing parseInt() method:");
console.log(parseInt(stringInt)); //* 123 (string "123" is converted to integer)
console.log(parseInt(floatStringg)); //* 123 (string "123.123" is converted to integer)
console.log(parseInt(stringWithLetters)); //* 123 (string "123abc" is parsed until the first non-numeric character)

//? parseFloat()
let floatString = "123.45";
let floatStringWithText = "123.45abc";

console.log("\nUsing parseFloat() method:");
console.log(parseFloat(floatString)); //* 123.45 (string "123.45" is converted to float)
console.log(parseFloat(floatStringWithText)); //* 123.45 (string "123.45abc" is parsed until the first non-numeric character)

//? toFixed()
let floatNumber = 10.34567;

console.log("\nUsing toFixed() method:");
console.log(floatNumber.toFixed(2)); //* "10.35" (rounded to 2 decimal places)
console.log(floatNumber.toFixed(3)); //* "10.346" (rounded to 3 decimal places)

//? toPrecision()
let preciseNum = 10.34567;

console.log("\nUsing toPrecision() method:");
console.log(preciseNum.toPrecision(4)); //* "10.35" (rounded to 4 total digits)
console.log(preciseNum.toPrecision(5)); //* "10.346" (rounded to 5 total digits)

//? isNaN() again
let validNumber = 100;
let notANumber = NaN;

console.log("\nUsing isNaN() method again:");
console.log(isNaN(validNumber)); //! false (100 is a valid number)
console.log(isNaN(notANumber)); //* true (NaN is not a valid number)

//? toString()
let numberToString = 123;

console.log("\nUsing toString() method:");
console.log(numberToString.toString()); //* "123" (converted to string)

//? valueOf()
let numberObject = new Number(123);

console.log("\nUsing valueOf() method:");
console.log(numberObject.valueOf()); //* 123 (returns the primitive number from the object)
