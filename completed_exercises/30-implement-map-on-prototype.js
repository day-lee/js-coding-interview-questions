/*
As you have seen from applying Array.prototype.map(), or simply map() earlier, 
the map method returns an array of the same length as the one it was called on. 
It also doesn't alter the original array, as long as its callback function doesn't.

In other words, map is a pure function, and its output depends solely on its inputs.
 Plus, it takes another function as its argument.

You might learn a lot about the map method if you implement your own version of it. 
It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). 
You should not use the built-in map method.
The Array instance can be accessed in the myMap method using this.
*/

Array.prototype.myMap = function (callback) {
  let newArr = [];

  // option 1. forEach
  this.forEach((el, i, arr) => {
    let result = callback(el, i, arr);
    return newArr.push(result);
  });

  // option 2.for loop
  //   for (let i = 0; i < this.length; i++) {
  //     let result = callback(this[i], i, this);
  //     newArr.push(result);
  //   }

  return newArr;
};

console.log([23, 65, 98, 5, 13].myMap((item) => item * 2)); // [ 46, 130, 196, 10, 26 ]
console.log(
  ["naomi", "quincy", "camperbot"].myMap((element) => element.toUpperCase())
); // [ 'NAOMI', 'QUINCY', 'CAMPERBOT' ]
console.log(
  [1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])
); // [ 1, 2, 5, 2, 1 ]
