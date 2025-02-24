//push pop method
const array = [1, 3, 4, 6, 8];
const num = 2;
array.push(num);

console.log(`Pushed  ${num} in array`);
console.log(`Array After push is ${array}`);
array.pop();
console.log(`Popped last element`);
console.log(`Array after pop is ${array}`);

//shift & unshift method
const shiftedNum = array.shift();
console.log(`Shifted number is ${shiftedNum}`);
console.log(`Array after shift is ${array}`);

const unshiftMethod = array.unshift(1, 3, 4, 5, 6);
console.log(`Array after unshift is ${array}`);

//slice and splice method
console.log("Array before slice is ", array);
const slice = array.slice(1, 3);
console.log("Array After slice is ", array);
console.log("Sliced array is ", slice);

console.log("Array before splice is ", array);
const splice = array.splice(1, 3);
console.log("Array After splice is ", array);
console.log("Spliced array is", splice);
