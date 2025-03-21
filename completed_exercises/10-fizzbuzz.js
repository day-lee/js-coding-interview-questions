// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// option1.
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(15);

// option2.
function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    line = "";
    if (i % 3 === 0) {
      line += "fizz";
    }
    if (i % 5 === 0) {
      line += "buzz";
    }
    console.log(line ? line : i);
  }
}

fizzBuzz2(15);
