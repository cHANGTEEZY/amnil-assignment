// if else statement is used to execute a certain block of
// code based on certain conditions it mets

// using condition operator
let fifaPrice = 4000;
let amountInBank = 6000;

function buyGame() {
    if (amountInBank > fifaPrice) {
        amountInBank -= fifaPrice;
        console.log(`Game bought. Total price remaining is ${amountInBank}`)
    } else {
        console.log("Not enough balance")
    }
}
buyGame()


// we have a condition if there is data or not
// if we have a data then it returns a boolean true
// else false
function printData(data) {
    if (data) {
        console.log(data)
    } else {
        console.log("No Data")
    }
}
printData("Some data")
printData()

// when we have multiple conditons to check we use else if

function trafficLight(color) {
    if (color === "red") {
        console.log("Stop");
    } else if (color === "yellow") {
        console.log("Slow down");
    } else if (color === "green") {
        console.log("Go");
    } else {
        console.log("Invalid color");
    }
}

trafficLight("red");
trafficLight("yellow");
trafficLight("green");

