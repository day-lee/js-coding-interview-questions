// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //handle edge cases for early exits
  if (size <= 0 || array.length === 0) return [];
  const newArray = [];
  // use slice() to get a chunk of subarray with the size
  for (let i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}

// test

const expectedArray1 = [
  [1, 2],
  [3, 4],
];
const expectedArray2 = [[1, 2], [3, 4], [5]];
const expectedArray3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8],
];
const expectedArray4 = [[1, 2, 3, 4], [5]];
const expectedArray5 = [[1, 2, 3, 4, 5]];

function test(chunk, expectedArray) {
  if (JSON.stringify(chunk) !== JSON.stringify(expectedArray)) return false;
  return true;
}

console.assert(test(chunk([1, 2, 3, 4], 2), expectedArray1), "test1 fail");
console.assert(test(chunk([1, 2, 3, 4, 5], 2), expectedArray2), "test2 fail");
console.assert(
  test(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3), expectedArray3),
  "test3 fail"
);
console.assert(test(chunk([1, 2, 3, 4, 5], 4), expectedArray4), "test4 fail");
console.assert(test(chunk([1, 2, 3, 4, 5], 10), expectedArray5), "test5 fail");
console.log("test done");
