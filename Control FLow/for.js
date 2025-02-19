// for loop
// we use this loop when we know how many we need to run loop


const flights = [
    { flightNo: "ATR787", destination: "Pokhara", status: "Available" },
    { flightNo: "ATR888", destination: "Kathmandu", status: "Cancelled" },
    { flightNo: "ATR989", destination: "Biratnagar", status: "Available" }
];

console.log("Available Flights:");
for (let i = 0; i < flights.length; i++) {
    if (flights[i].status === "Available") {
        console.log(`${flights[i].flightNo} to ${flights[i].destination}`);
    }
}



