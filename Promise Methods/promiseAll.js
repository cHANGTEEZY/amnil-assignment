const fetchJoke = () => {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => data);
};

const promise1 = fetchJoke();
const promise2 = fetchJoke();
const promise3 = fetchJoke();

Promise.all([promise1, promise2, promise3])
  .then((jokes) => {
    jokes.forEach((joke, index) => {
      console.log(`Joke ${index + 1}: ${joke.setup} - ${joke.punchline}`);
    });
  })
  .catch((error) => {
    console.log("Error fetching jokes:", error);
  });
