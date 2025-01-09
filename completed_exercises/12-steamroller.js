// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

// create an empty variable result
// create a recursive function flatten, which will check if the current item is an array.
// if it's an array, put it into an for loop and recursively call itself
// if it's not an array, simply push it to the result array.
// call the flatten function and return result
// base case is when it's not an array anymore, else result.push(item)

function steamrollArray(arr) {
  let result = [];
  function flatten(item) {
    if (Array.isArray(item)) {
      for (let i of item) flatten(i);
    } else {
      result.push(item);
    }
  }
  flatten(arr);
  return result;
}
console.log(steamrollArray([[["a"]], [["b"]]])); // ["a", "b"]
console.log(steamrollArray([1, [], [3, [[4]]]])); // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
