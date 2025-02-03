/*
Write a function that converts an object into an array,
where each element represents a key-value pair in the form of an array.

push() can take multiple parameters. 
*/

function toArray(obj) {
  let arr = [];
  for (let i in obj) {
    let innerArr = [];
    innerArr.push(i, obj[i]);
    arr.push(innerArr);
  }
  console.log(arr);
  return arr;
}

toArray({ a: 1, b: 2 }); // [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }); // [["shrimp", 15], ["tots", 12]]

toArray({}); // []
