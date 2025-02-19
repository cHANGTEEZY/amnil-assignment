//? Javascript Object is a variable that can store data in key value pair of any data type

//* Created an object called cat
const cat = {
  name: "Yuki",
  likes: "Meat",
  age: 3,
};

//* logging the object using the dot notation and bracket notation
console.log(
  `My Cat's name is ${cat.name}. He likes ${cat["likes"]} and is ${cat.age} years old`
);

//* modifying the data in the object
cat.name = "Yogi";
console.log(
  `My Cat's name is ${cat.name}. He likes ${cat["likes"]} and is ${cat.age} years old`
);

//* adding properties to object
cat.color = "Orange";
cat.legs = 4;
console.log(cat);

//* deleting properties from object using delete operator
delete cat.legs;
console.log(cat);
