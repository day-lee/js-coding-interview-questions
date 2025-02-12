/*
Create a function that concatenates n input arrays, where n is variable.

Rest parameter is used because the number of parameters is not predetermined.
*/

// option 1. recursive
function concat(...args) {
  const arr = args;
  let result = [];

  function flatten(arg) {
    for (let i of arg) {
      if (Array.isArray(i)) {
        flatten(i);
      } else result.push(i);
    }
  }
  flatten(arr);
  console.log(result);
  return result;
}

// option 2. rest parameter, spread operator
// rest parameter to handle indefinite number of input
function concat(...args) {
  let result = [];

  for (let array of args) {
    if (Array.isArray(array)) {
      // spread operator to concatenation
      result.push(...array);
    } else {
      console.log("only arrays accepted,", array);
    }
  }
  console.log(result);
}

concat([1, 2, 3], [4, 5], [6, 7]); // [1, 2, 3, 4, 5, 6, 7]
concat([1], [2], [3], [4], [5], [6], [7]); // [1, 2, 3, 4, 5, 6, 7]
concat([1, 2], [3, 4]); // [1, 2, 3, 4]
concat([4, 4, 4, 4, 4]); // [4, 4, 4, 4, 4]
concat(4, 4, 4, 4, 4);
