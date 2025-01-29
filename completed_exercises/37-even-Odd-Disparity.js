/*
Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

For example:
solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.  
Let's now add two letters to the last example:

solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters. 
The input will be an array of lowercase letters and numbers only.

In some languages (Haskell, C++, and others), input will be an array of strings:

solve ["0","1","2","3","a","b"] = 0 


*/

// option 1. for..of, ternary
function evenOddDisparity(str) {
  let result = 0;

  for (let i of str) {
    if (typeof i === "string") continue;
    i % 2 === 0 ? result++ : result--;
  }

  return result;
}

// option 2. reduce method
function evenOddDisparity(str) {
  return str.reduce((acc, el) => {
    if (typeof el === "number") {
      el % 2 === 0 ? acc++ : acc--;
    }
    return acc;
  }, 0);
}

console.log(evenOddDisparity([0, 1, 2, 3])); //0
console.log(evenOddDisparity([0, 1, 2, 3, "a", "b"])); //0
console.log(evenOddDisparity([1, "a", 17, 8, "e", 3, "i", 12, 1])); // -2
