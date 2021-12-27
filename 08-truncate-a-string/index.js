// Solution 1
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

// Solution 2
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + '...' : str;
}
