// pseudocode
// breaking down the problem into small pieces
// read others solutions
// within 20 mins, time it and explain out loud

// array for loop length
// previous value * num
// map

// option1. for loop
function arrayOfMultiples(num, length) {
  let newArr = [];
  for (let i = 1; i <= length; i++) {
    newArr.push(num * i);
  }
  return newArr;
}

// option2. reduce, map, forEach
function arrayOfMultiples(num, length) {
  console.log(Array.from({ length }));
  // creates an array with 'undefined' values of length [ undefined, undefined, ...]
  const newArr = Array.from({ length }, (_, i) => num * (i + 1));
  return newArr;
}

console.log(arrayOfMultiples(12, 10)); // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(7, 5)); // [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(17, 6)); // [17, 34, 51, 68, 85, 102]
