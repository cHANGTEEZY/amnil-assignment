//-----------------------------------------------

function test(num) {
  if (num) {
    return num;
  }
  return 1;
}

console.log(test(10));

//-----------------------------------------------

function loops(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 4) {
      return 1;
    }
    console.log("Iteration", i);
  }
  return 10;
}

const nums = [1, 2, 4, 5, 15, 3];

console.log(loops(nums));

//-----------------------------------------------

function loopsWithBreak(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 4) {
      break;
    }
    console.log("Iteration", i);
  }
  return 10;
}

const numss = [1, 2, 4, 5, 15, 3];

console.log(loopsWithBreak(numss));
