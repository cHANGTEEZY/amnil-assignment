const array = [1, 3, 4, 5, 6];

//?map method
const mappedArray = array.map((num) => {
  return num * 2;
});
console.log(`Mapped array is  ${mappedArray}`);

//?flatmap method
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log("Array before flattening", nestedArray);
const flattenedArray = nestedArray.flatMap((array) => array);
console.log("Array After flattening", flattenedArray);

//?reduce method
const sum = array.reduce((acc, next) => {
  return acc + next;
});
console.log("The sum of array is " + sum);

//?filter method
const filteredNum = array.filter((num) => num % 2 === 0);
console.log(filteredNum);
