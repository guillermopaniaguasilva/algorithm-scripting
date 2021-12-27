// Solution 1
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

// Solution 2
function confirmEnding(str, target) {
  let re = new RegExp(target + '$', 'i');
  return re.test(str);
}

// Solution 3
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
