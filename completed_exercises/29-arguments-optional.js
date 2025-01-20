/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/
function addTogether() {
  let [first, second] = arguments;

  if (typeof first === "number") {
    if (typeof second === "number") return first + second;
    if (arguments.length === 1) {
      return (second) => addTogether(first, second);
    }
  }
}

console.log(addTogether(2)([3])); // undefined
console.log(addTogether(2, 3)); // 5
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // undefined
console.log(addTogether(5)(7)); // 12
