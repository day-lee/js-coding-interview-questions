/* Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge,
we would like you to use one of the JavaScript substring methods instead. */

function confirmEnding(str, target) {
  const slice = str.slice(str.length - target.length, str.length);
  console.log(slice);
  return slice === target;
}

confirmEnding("Bastian", "n"); // true
confirmEnding(
  "Walking on water and developing software from a specification are easy if both are frozen",
  "specification"
); // false
// Your code should not use the built-in method .endsWith() to solve the challenge.
