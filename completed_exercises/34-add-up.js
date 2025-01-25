/*
Create a function that takes a number as an argument. 
Add up all the numbers from 1 to the number you passed to the function. 
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

function addUp(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result; //10
}

console.log(addUp(4));

function addUpRecursion(num) {
  if (num === 1) {
    return 1;
  }
  return addUpRecursion(num - 1) + num;
}

console.log(addUpRecursion(4)); // 10
