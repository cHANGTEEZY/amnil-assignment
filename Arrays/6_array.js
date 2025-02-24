let multiDimensionalArray = [
  [1, 2, 3, 4, [1, 2, 3, 4]],
  [1, 2, 3, 4, [1, 2, 3, 4]],
  [1, 2, 3, 4, [1, 2, 3, 4]],
  [1, 2, 3, 4, [1, 2, 3, 4]],
];

console.log("Multi Dimensional Array", multiDimensionalArray);

const getItemFromIndex = 2;
console.log(
  `Getting the array at index ${getItemFromIndex} : ${multiDimensionalArray[getItemFromIndex]}`
);
