// do while loop is a loop where we loop over once before 
// checking the condition


// suppose we have to wash our hair for 5 mins 
// and in a single loop we can wash for 2.5 mins
// so we need to loop 2 times to clean our hair 
let hairIsClean = false;
let washTime = 0;

do {
    console.log("washing hair");
    washTime += 2.5
} while (washTime < 5)
console.log("Hair cleaned")
