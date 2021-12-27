// Solution 1
function palindrome(str) {
  const regex = /[\W_]/g;

  const lowRegStr = str.toLowerCase().replace(regex, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}
