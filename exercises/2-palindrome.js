// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed.

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false

function palindrome(str) {
  /* loop through the parameter 'str' up to half way of its length 
compare each letter with its corresponding letter from the end,
so we don't need to compare all of them */
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    // if any letter don't match, return false
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  // If the loop completes without returning false, it means the string is a palindrome, so return true
  return true;
}

function palindrome2(str) {}

console.log(palindrome("kayak"));
console.log(palindrome("kayaks"));
console.log(palindrome("racecar"));
