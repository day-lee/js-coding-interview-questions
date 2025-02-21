/*
According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.
This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.
*/

const dropRight = (arr, n = 1) => {
  const len = arr.length;
  if (len <= n) return [];

  return arr.slice(0, len - n);
};

console.log(dropRight([1, 2, 3])); //➞ [1, 2]

console.log(dropRight([1, 2, 3], 2)); //➞ [1]

console.log(dropRight([1, 2, 3], 5)); //➞ []

console.log(dropRight([1, 2, 3], 0)); //➞ [1, 2, 3]
