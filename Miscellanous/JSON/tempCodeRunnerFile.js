const getData = async () => {
  try {
    const response = await fetch(`http://localhost:3000/data?name=Sushank`, {
      method: "GET",
      headers: {
        "Content-Type": "text/html",
      },
    });

    const receivedData = await response.text();
    return receivedData;
  } catch (error) {
    console.error(error.message);
  }
};

getData().then((data) => {
  console.log(data);
});
