function getRandomJoke() {
  return new Promise((resolve, reject) => {
    console.log("Fetching a random joke...");

    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((jokeData) => {
        resolve(jokeData);
        console.log(jokeData);
      })
      .catch((error) => {
        reject(`Failed to fetch joke: ${error.message}`);
      });
  });
}

getRandomJoke()
  .then((joke) => {
    console.log("Setup:", joke.setup);
    return joke.punchline;
  })
  .then((punchline) => {
    console.log("Punchline:", punchline);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Joke request completed");
  });
