// Longhand

function greetLonghand(name) {
  if (name === undefined) {
    name = "Guest";
  }
  console.log("Hello, " + name + "!");
}

greetLonghand("Alice");
greetLonghand();

// Shorthand

function greetShorthand(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greetShorthand("Alice");
greetShorthand();
