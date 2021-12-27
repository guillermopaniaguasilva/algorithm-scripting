// Solution 1
function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

// Solution 2
function factorialize(num) {
  return num === 0 ? 1 : num * factorialize(num - 1);
}

// Solution 3
function factorialize(num, factorial = 1) {
  return num === 0 ? factorial : factorialize(num - 1, factorial * num);
}

// Solution 4
function factorialize(num) {
  return num < 0
    ? 1
    : new Array(num)
        .fill(undefined)
        .reduce((product, _, index) => product * (index + 1), 1);
}
