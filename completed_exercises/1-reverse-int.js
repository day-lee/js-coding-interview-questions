// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// option 1
// convert a number to a string, then an array, reverse it
// use Math.sign to put the original sign back
function reverseInt(n) {
  const str2 = String(Math.abs(n));
  const reverse = parseInt(str2.split("").reverse().join(""));
  return console.log(reverse * Math.sign(n));
}

reverseInt(15); //=== 51
reverseInt(981); //=== 189
reverseInt(500); //=== 5
reverseInt(-15); //=== -51
reverseInt(-90); //=== -9

// option 2
// convert a number to a string then an array. Create a new array
// by filling in it reverse order, join it into a string, and convert it back to a number
function reverseInt2(n) {
  const arr = String(Math.abs(n)).split("");
  let reversed = "";
  for (let i of arr) {
    reversed = i + reversed;
  }
  return parseInt(reversed) * Math.sign(n);
}

console.assert(reverseInt2(15) === 51, "test1 fail");
console.assert(reverseInt2(981) === 189, "test2 fail");
console.assert(reverseInt2(500) === 5, "test3 fail");
console.assert(reverseInt2(-15) === -51, "test4 fail");
console.assert(reverseInt2(-90) === -9, "test5 fail");

console.log("reverseInt2 test done");
