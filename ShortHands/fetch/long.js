async function fetchUserLong() {
  try {
    const response = await fetch("http://localhost:3000/users");

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const users = await response.json();

    let firstUser;
    if (Array.isArray(users) && users.length > 0) {
      firstUser = users[0];
    } else {
      firstUser = null;
    }

    let name;
    if (firstUser && firstUser.name) {
      name = firstUser.name;
    } else {
      name = "No name";
    }

    let city;
    if (firstUser && firstUser.address && firstUser.address.city) {
      city = firstUser.address.city;
    } else {
      city = "Unknown City";
    }

    console.log(name, city);
  } catch (err) {
    console.error("Error: " + err.message);
    return "Error occurred when fetching user data";
  }
}

fetchUserLong();
