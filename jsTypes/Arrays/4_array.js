const array = [1, 3, 4, 5, 6, 7, 8, 9];

console.log(array.indexOf(9));

console.log(
  array.find((num) => {
    return num % 2 === 0;
  })
);

console.log(
  array.findIndex((num) => {
    return num % 2 === 0;
  })
);

console.log(array.includes(1));
