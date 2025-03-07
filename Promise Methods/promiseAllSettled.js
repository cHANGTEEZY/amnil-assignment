const fetchJoke = () => {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => data);
};

const promise1 = fetchJoke();
const promise2 = fetchJoke();
const promise3 = Promise.reject("This promise intentionally fails");

// Using Promise.allSettled to handle all promises
Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log("All promises have settled (fulfilled or rejected)");

  results.forEach((result, index) => {
    console.log(result);
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} fulfilled with value:`, result.value);
    } else {
      console.log(`Promise ${index + 1} rejected with reason:`, result.reason);
    }
  });
});
