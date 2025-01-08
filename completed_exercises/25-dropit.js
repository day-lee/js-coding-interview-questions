/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
  let copyArr = [...arr];
  for (let i of arr) {
    if (func(i)) {
      return copyArr;
    } else copyArr.shift();
  }
  return [];
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
); // [3, 4]
console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
); // [1, 2, 3]

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
); // []
