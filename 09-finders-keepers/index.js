// Solution 1
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

// Solution 2
function findElement(arr, func) {
  return arr.find(func);
}

// Solution 3
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

// Solution 4
function findElement(arr, func) {
  return arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0];
}
