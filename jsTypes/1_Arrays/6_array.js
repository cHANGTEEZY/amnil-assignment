let multiDimensionalArray = [
  [1, 2, [3, 4], [5, 6]],
  [1, 2, [3, 4]],
  [1, 2, [3, 4]],
  [1, 2, [3, 4]],
];

console.log("Multi Dimensional Array", multiDimensionalArray);

const getItemFromIndex = 0;
console.log(
  "Getting the array at index",
  getItemFromIndex,
  ":",
  multiDimensionalArray[getItemFromIndex]
);

// const getItemFromIndex = 0;
// console.log(
//   `Getting the array at index ${getItemFromIndex} : ${multiDimensionalArray[getItemFromIndex]}`
// );

console.log("Flattening the array");
console.log(multiDimensionalArray.flat(Infinity));
