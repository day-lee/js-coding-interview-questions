/*
Write a function that converts an object into an array,
where each element represents a key-value pair in the form of an array.

slice() starts from the first element. If the end element is not provided, it slices up to end.
*/

const drop = (arr, n) => {
  console.log(arr.slice(n));
  return arr.slice(n);
};

drop([1, 2, 3], 1); // [2, 3]

drop([1, 2, 3], 2); // [3]

drop([1, 2, 3], 5); // []

drop([1, 2, 3], 0); // [1, 2, 3]
