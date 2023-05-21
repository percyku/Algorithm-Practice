console.log(palindrome("tacocat")); // true
console.log(palindrome("amanaplanacanalpanama")); // true
console.log(palindrome("asdfsafeaw")); // false
console.log(palindrome("acsassca"));

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  let arr = str.split("");

  while (left <= right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
