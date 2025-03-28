const string = "helloworld";
const stringIterator = string[Symbol.iterator]();

let result = stringIterator.next();
while (!result.done) {
  if ("aeiou".includes(result.value)) {
    console.log(`Vowel found: ${result.value}`);
  }
  result = stringIterator.next();
}
