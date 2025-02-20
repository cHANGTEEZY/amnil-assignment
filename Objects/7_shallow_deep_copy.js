const person = {
    name: "John",
    age: 30,
    hobbies: {
        indoor: ["reading", "cooking"],
        outdoor: ["hiking", "cycling"]
    }
};

const shallowCopy = Object.assign({}, person);
shallowCopy.name = "Ram"
console.log(shallowCopy)
console.log("Original object after shallow copy")
console.log(person.name)

