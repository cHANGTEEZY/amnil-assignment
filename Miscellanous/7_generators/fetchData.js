function* fetchDataAndDisplay() {
  try {
    console.log("Fetching data...");
    const response = yield fetch(
      "https://jsonplaceholder.typicode.com/posts/10"
    ); // Pause until fetch completes
    const data = yield response.json(); // Pause until JSON is parsed

    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function runGenerator(gen) {
  const iterator = gen();

  function handle(result) {
    if (result.done) return; // Stop when done

    result.value
      .then((res) => handle(iterator.next(res))) // Resume generator with resolved value
      .catch((err) => iterator.throw(err)); // Handle errors
  }

  handle(iterator.next()); // Start executio
}

// Run the generator
runGenerator(fetchDataAndDisplay);
