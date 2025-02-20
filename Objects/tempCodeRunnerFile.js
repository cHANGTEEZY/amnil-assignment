// Deep Copy Examples
// console.log("\n2. Deep Copy Examples:");

// // Using JSON.parse(JSON.stringify())
// const deepCopy1 = JSON.parse(JSON.stringify(originalObj));

// // Using a custom deep clone function
// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj;
//     }

//     let copy = Array.isArray(obj) ? [] : {};

//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             copy[key] = deepClone(obj[key]);
//         }
//     }

//     return copy;
// }

// const deepCopy2 = deepClone(originalObj);

// // Demonstrating deep copy behavior
// originalObj.address.country = 'Canada';  // Nested object is not affected in deep copy
// console.log("\nAfter modifying nested object:");
// console.log("Original object:", originalObj);
// console.log("Deep copy 1:", deepCopy1);
// console.log("Deep copy 2:", deepCopy2);

