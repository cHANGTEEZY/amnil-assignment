//sort method

const notSortedArray = [1, 31, 412, 12, 3, 45, 9];

console.log(
  "Sorted Arrays",
  notSortedArray.sort((a, b) => a - b)
);

//concat method
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log("Concatinated array is ", newArray);

//toString method

const array = [1, 3, 4, 5];
console.log(array.toString());
