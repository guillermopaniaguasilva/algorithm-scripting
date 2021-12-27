// Solution 1 - Procedural approach
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

// Solution 2 - Declarative approach
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

// Solution 3 - Recursive approach
function mutation([target, test], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
    ? false
    : mutation([target, test], i + 1);
}
