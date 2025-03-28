function* myGenerator() {
  yield "Hello";
  yield "World";
  yield "!";
}

const gen = myGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* letters() {
  yield "A";
  yield "B";
  yield "C";
}

for (let letter of letters()) {
  console.log(letter);
}

function* myGenerator() {
  yield "A";
  return "B";
  yield "C";
}

const gen1 = myGenerator();
console.log(gen1.next()); // { value: "A", done: false }
console.log(gen1.next()); // { value: "B", done: true }
console.log(gen1.next()); // { value: undefined, done: true }
