async function fetchUser() {
  try {
    const response = await fetch("http://localhost:3000/users");

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const users = await response.json();
    const firstUser = users?.[0];
    const name = firstUser?.name ?? "No name";
    const city = firstUser?.address?.city ?? "Unknown City";
    console.log(name, city);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    return "Error occurred when fetching user data";
  }
}

fetchUser();
