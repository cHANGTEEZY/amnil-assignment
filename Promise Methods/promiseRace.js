function fetchJoke() {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Failed to fetch joke");
    });
}

// const jokePromise = new Promise((resolve) => {
//   setTimeout(() => {
//     fetchJoke().then(resolve).catch(resolve);
//   }, 2000);
// });
const jokePromise = fetchJoke();

const timerPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Timeout reached"), 2000);
});

const failurePromise = new Promise((_, reject) => {
  setTimeout(() => reject("Something went wrong"), 1000);
});

// Using Promise.race()
Promise.race([jokePromise, timerPromise, failurePromise])
  .then((result) => {
    console.log("Fastest promise:", result);
  })
  .catch((error) => {
    console.log("Race failed with error:", error);
  });
