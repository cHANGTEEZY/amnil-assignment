let person = {
  name: "Sushank",
  age: 20,
  city: "Lalitpur",
};

for (let key in person) {
  console.log(key + ": " + person[key]); // Logs the key and the value
}
