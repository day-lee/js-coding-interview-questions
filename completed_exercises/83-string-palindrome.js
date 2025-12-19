/*
Check Palindrome by Filtering Non-Letters
Given a string containing letters, digits, and symbols, determine if it reads the same forwards and backwards when considering only alphabetic characters (case-insensitive).
*/

// function isAlphabeticPalindrome(code) {
// const regex = /[A-Za-z]/g;
// const arr = code.match(regex);
// if (Array.isArray(arr)) {
//     const lowerArr = arr?.map(i => i.toLowerCase());
//     for (let i = 0; i <= (lowerArr.length -1)/2 ; i++){
//       if (lowerArr[i] !== lowerArr[lowerArr.length - 1 -i]) {
//         return false
//       }
//     }
// }
// return true
// }

// code reviewed version 
// string.match(regex) returns an array or null if no match found 
function isAlphabeticPalindrome(code) {
const regex = /[A-Za-z]/g;
// match returns null if no match found, so we use || [] to avoid error
const arr = code.match(regex) || [];
    const lowerArr = arr.map(i => i.toLowerCase());
    const half = Math.floor(lowerArr.length / 2 ); // 정수 반환 
    for (let i = 0; i <= half ; i++){
      if (lowerArr[i] !== lowerArr[lowerArr.length - 1 -i]) {
        return false
      }
    }
return true
}

console.log(isAlphabeticPalindrome('AbBa') )//t
console.log(isAlphabeticPalindrome('1A!bBa')) //t
console.log(isAlphabeticPalindrome('AbbiBa')) // false
console.log(isAlphabeticPalindrome('Abbi23Ba')) // false
console.log(isAlphabeticPalindrome('A')) // t






