//we use break statement to come out of loop and continue to skip an item in loop

//continue example
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue;
    }
    console.log(`Odd number: ${numbers[i]}`);
}

//break example 
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 8) {
        break;
    }
    console.log(i)
}   
