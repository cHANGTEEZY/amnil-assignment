const numbers = [1, 2, 3, 4, 5, 6];

//for in
for (let num in numbers) {
  console.log("Current index", num);
}

//for of
for (let num of numbers) {
  console.log(num * 2);
}

//foreach method
numbers.forEach((element) => {
  console.log(element * 2);
});

//every method
const every = numbers.every((num) => num > 10);
if (every) {
  console.log("Every element is smaller than 10");
} else {
  console.log("Every element is not smaller than 10");
}
