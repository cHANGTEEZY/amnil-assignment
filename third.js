function findNumber(arr, target) {
  function containsNumber() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
      }
    }
    return false;
  }
  return containsNumber();
}

console.log(findNumber([1, 2, 3, 4, 5], 3));
console.log(findNumber([1, 2, 3, 4, 5], 6));
