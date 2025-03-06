/*
_.difference(array, [values]) creates an array of array values not included in the other given arrays
 using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
*/

// option 1
function difference(arr, compare) {
  return arr.filter((item) => !compare.includes(item));
}

// option 2
function difference(arr, compare) {
  const newSet = new Set(compare);
  return arr.filter((item) => !newSet.has(item));
}

console.log(difference([2, 1, 4], [2, 3])); // [1, 4]
console.log(difference(["banana", "orange", "apple"], ["orange", "apple"])); // ['banana']
