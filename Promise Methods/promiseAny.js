function fetchJoke() {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((joke) => joke);
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("First promise failed"), 2000);
});

const promise2 = fetchJoke();

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Third promise succeeded"), 3000);
});

Promise.any([promise1, promise2, promise3])
  .then((firstSuccessValue) => {
    console.log("First promise to fulfill:", firstSuccessValue);
  })
  .catch((aggregateError) => {
    console.log("All promises rejected!");
    console.log(aggregateError.errors);
  });
