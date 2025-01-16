/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

// option 1. for..of
function truthCheck(collection, pre) {
  for (let obj of collection) {
    if (!obj[pre]) {
      return false;
    }
  }
  return true;
}

// option 2. forEach
function truthCheck(collection, pre) {
  let result = true;
  collection.forEach((obj) => {
    if (!obj[pre]) {
      result = false;
    }
  });
  return result;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
); // false
console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
    ],
    "number"
  )
); // true
