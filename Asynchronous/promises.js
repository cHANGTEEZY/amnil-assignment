function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data received successfully!");
      } else {
        reject("Error: Failed to fetch data.");
      }
    }, 2000); // Simulate a 1-second delay
  });
}

// sending success resulting in successful promise
fetchData(true)
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Failure:", error);
  });

// sending failure resulting in rejection
fetchData(false)
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Failure:", error);
  });
