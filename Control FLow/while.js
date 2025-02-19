// we use while loop when we know that we want to loop
// but we do not know how many times we need to loop

let speed = 0;
let maxSpeed = 100;
let isAccelerating = true;

while (isAccelerating && speed < maxSpeed) {
    speed += 10;
    console.log(`Current speed: ${speed} km/h`);

    if (speed === maxSpeed) {
        console.log("MaxSpeed Reached");
        isAccelerating = false;
    }
}
