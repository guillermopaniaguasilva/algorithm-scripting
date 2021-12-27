// Solution 1
function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';
  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

// Solution 2
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return '';
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

// Solution 3
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
