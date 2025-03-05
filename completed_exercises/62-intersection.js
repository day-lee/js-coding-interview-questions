// lodash intersection for array

function intersection(...args) {
  if (args.length === 0) return [];
  let base = args[0];
  for (let i = 1; i < args.length; i++) {
    base = base.filter((item) => args[i].includes(item));
  }
  return base;
}

// given empty args, return empty array
console.log(intersection([])); // []
// given string and number, return correct result
console.log(intersection([1, 2, "a"], [1, 3, "a", 5], [1, "b", "a", "a", 9])); // [1, 'a']
// given not intersecting arrays, return empty array
console.log(intersection([1, 2, "a"], ["a", "v", 5], ["b", "ab", 19], [11])); // []
// given numbers, return correct result
console.log(intersection([1, 2, 3], [3, 4, 5], [3, 3, 9])); //➞  [3]
// given empty array, return empty array
console.log(intersection([1, 2, "a"], [3, "a", 5], ["b", "a", 9], [])); // []
// given strings, return correct result
console.log(
  intersection(
    ["apple", "banana", "cherry"],
    ["banana", "cherry", "date"],
    ["cherry", "date", "fig"]
  )
); //['cherry']
