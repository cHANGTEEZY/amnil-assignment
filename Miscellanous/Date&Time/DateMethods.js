const date = new Date();

//? Getting date methods
console.log("getFullYear():", date.getFullYear()); // Gets the full year (YYYY)
console.log("getMonth():", date.getMonth()); // Gets the month (0-11) [0 = January]
console.log("getDay():", date.getDay()); // Gets the day of the week (0-6) [0 = Sunday]
console.log("getHours():", date.getHours()); // Gets the hours (0-23)
console.log("getMinutes():", date.getMinutes()); // Gets the minutes (0-59)
console.log("getSeconds():", date.getSeconds()); // Gets the seconds (0-59)
console.log("getMilliseconds():", date.getMilliseconds()); // Gets the milliseconds (0-999)
console.log("getTime():", date.getTime()); // Gets the timestamp (milliseconds since 1970)
console.log("getDate():", date.getDate()); // Gets the day of the month (1-31)
console.log("getUTCDate():", date.getUTCDate()); // Gets the day of the month in UTC (1-31)

//? Setting date methods

// setFullYear()
date.setFullYear(2028);
console.log("setFullYear(2028):", date);

// setMonth()
date.setMonth(5); // Setting month to June
console.log("setMonth(5):", date);

// setDate()
date.setDate(20); // Setting day of the month to 20
console.log("setDate(20):", date);

// setHours()
date.setHours(15); // Setting hours to 3 PM
console.log("setHours(15):", date);

// setMinutes()
date.setMinutes(45); // Setting minutes to 45
console.log("setMinutes(45):", date);

// setSeconds()
date.setSeconds(30); // Setting seconds to 30
console.log("setSeconds(30):", date);

// setMilliseconds()
date.setMilliseconds(500); // Setting milliseconds to 500
console.log("setMilliseconds(500):", date);

// setTime() - Setting date using a timestamp
let newTimestamp = 1710372000000; // Example timestamp
date.setTime(newTimestamp);
console.log("setTime(1710372000000):", date);
