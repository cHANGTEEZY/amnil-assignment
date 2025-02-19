function binarySearch(arr, target, low, high) {
  if (low > high) {
    return -1;
  }

  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1);
  }

  return binarySearch(arr, target, mid + 1, high);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 7;

let result = binarySearch(arr, target, 0, arr.length - 1);
console.log(result);
