/*
Write your own Array.prototype.myMap(),
which should behave exactly like Array.prototype.map().
You should not use the built-in map method.
 The Array instance can be accessed in the myMap method using this.
*/

// option 1. for loop
Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};

// option 2. forEach
Array.prototype.myMap = function (callback) {
  const newArr = [];
  this.forEach((item) => newArr.push(callback(item)));
  return newArr;
};

const arr = [1, 2, 3];
console.log(arr.myMap((item) => item + 1));

// below code doesn't work bc arrow function doesn't support 'this' keyword
Array.prototype.myMap = (callbackF) => {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callbackF(this[i], i, this));
  }
  return newArray;
};

const arr = [1, 2, 3];
console.log(arr.myMap((el) => el + 1));
