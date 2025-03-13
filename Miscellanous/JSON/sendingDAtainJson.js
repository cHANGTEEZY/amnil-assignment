const data = {
  name: "Sushank",
  email: "sushank@gmail.com",
  age: 30,
};

const sendingDataInJson = async () => {
  try {
    const response = await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        //we specify the type of data we want to send
        "Content-Type": "application/json",
      },
      //convert to json format
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Response from server:", result);
  } catch (error) {
    console.error("Error sending data:", error);
  }
};

sendingDataInJson();
