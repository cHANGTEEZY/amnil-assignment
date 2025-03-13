const getData = async () => {
  try {
    const response = await fetch(`http://localhost:3000/data?name=Sushank`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const receivedData = await response.json();
    return receivedData;
  } catch (error) {
    console.error(error.message);
  }
};

//using .then
getData().then((data) => {
  console.log(data);
});

//using IIFE
(async () => {
  const data = await getData();
  console.log(data);
})();
