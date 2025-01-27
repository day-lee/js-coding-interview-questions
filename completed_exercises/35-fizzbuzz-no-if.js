/*
I know that there are quite a few fizz-buzz problems already out there but this one does have a twist (you may find this useful)

Task
You need to implement a function that applies the standard fizz buzz test:

If a number is divisible by 3, return Fizz
If it is divisible by 5, return Buzz
If it is divisible by both 3 and 5, return FizzBuzz
If it is not divisible by 3 or 5, return the number itself
However, when making the function, you cannot use if (meaning else is also not an option).

Input
A number will always be provided
The number provided will always be positive and an integer
Examples
6 should return Fizz
10 should return Buzz
15 should return FizzBuzz
17 should return 17
*/

// option 1. ternary with variable
const fizzBuzz = (n) => {
  let result = n;
  result = n % 3 === 0 ? "Fizz" : result;
  result = n % 5 === 0 ? "Buzz" : result;
  result = n % 3 === 0 && n % 5 === 0 ? "FizzBuzz" : result;

  return result;
};

// option 2. logical operator
function fizzBuzz(n) {
  return (
    (n % 15 === 0 && "FizzBuzz") ||
    (n % 3 === 0 && "Fizz") ||
    (n % 5 === 0 && "Buzz") ||
    n
  );
}

// option 3. ternary
function fizzBuzz(n) {
  return n % 15 ? (n % 5 ? (n % 3 ? n : "Fizz") : "Buzz") : "FizzBuzz";
}

console.log(fizzBuzz(1)); // 1
console.log(fizzBuzz(6)); // Fizz
console.log(fizzBuzz(7)); // 7
console.log(fizzBuzz(10)); // Buzz
console.log(fizzBuzz(30)); // FizzBuzz
