/* Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i]. */

function largestOfFour(arr) {
  let resultArr = [];
  for (let item of arr) {
    let maxNum = item[0];
    for (let innerItem of item) {
      if (innerItem > maxNum) {
        maxNum = innerItem;
      }
    }
    resultArr.push(maxNum);
  }

  return resultArr;
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);
