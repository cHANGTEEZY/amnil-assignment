// Shallow Copy Examples
console.log("1. Shallow Copy Examples:");

const originalObj = {
    name: 'John',
    age: 30,
    address: {
        city: 'Kathmandu',
        country: 'Nepal'
    }
};


const shallowCopy1 = { ...originalObj };
console.log("\nOriginal object:", originalObj);
console.log("Shallow copy:", shallowCopy1);
originalObj.address.city = 'Bhaktapur';
console.log("\nAfter modifying nested object:");
console.log("Original object:", originalObj);
console.log("Shallow copy:", shallowCopy1);

// Deep Copy Examples
console.log("\n2. Deep Copy Examples:");
// Method 1: Using JSON.parse(JSON.stringify())
const deepCopy1 = JSON.parse(JSON.stringify(originalObj));
// Method 2: Using structured clone 
const deepCopy2 = structuredClone(originalObj);

console.log("\nOriginal object:", originalObj);
console.log("Deep copy 1:", deepCopy1);
console.log("Deep copy 2:", deepCopy2);

// Modify nested object in original
originalObj.address.city = 'Pokhara';
console.log("\nAfter modifying nested object:");
console.log("Original object:", originalObj);
console.log("Deep copy 1:", deepCopy1);
console.log("Deep copy 2:", deepCopy2);

