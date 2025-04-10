/*
Integer Calculator
The task is to create an integer calculator, however you may use only the addition and subtraction arithmetic operators.

You need to implement solutions for the following:

Add - The addition of two integer numbers x + y = ? (example: 3 + 5 = 8)
Subtract - The subtraction of two integer numbers x − y = ? (example: 10 − 3 = 7)
Multiply - The multiplication of two integer numbers x ∗ y = ? (example: 4 ∗ 3 = 12)
Divide - The division of two integer numbers, disregarding any remainder x ÷ y = ? (example: 20 ÷ 3 = 6)
The solution should satisfy the following interface:

public interface ICalculator {
    int Add(int x, int y);
    int Subtract(int x, int y);
    int Multiply(int x, int y);
    int Divide(int x, int y);
}
The Run method should accept as its operation input one of "add", "subtract", "multiply", "divide" and then invoke the relevant method with the remaining two parameters.
The Run method should return the string "exception" if the answer could not be computed from the operation, otherwise it should return the string form of the result of the operation as returned by the corresponding method.

*/

function calculator(operator, x, y) {
  switch (operator) {
    case "Add":
      return x + y;

    case "Subtract":
      return x - y;

    case "Multiply":
      for (let i = 1; i < y; i++) {
        x += x;
      }
      return x;

    case "Divide":
      let count = 0;
      for (let i = x; x > y; ) {
        x -= y;
        count++;
      }
      return count;

    default:
      throw new Error("Invalid operation");
  }
}

console.assert(calculator("Add", 1, 2) === 3, "failed 1");
console.assert(calculator("Subtract", 1, 2) === -1, "failed 2");
console.assert(calculator("Multiply", 3, 2) === 6, "failed 3");
console.assert(calculator("Divide", 7, 2) === 3, "failed 4"); // disregard any remainder
console.log('completed')

try {
  calculator("operator", 7, 2);
  console.assert(false, "failed 5: No error thrown for invalid operation");
} catch (error) {
  console.assert(
    error.message === "Invalid operation",
    "failed 5: Error message does not match"
  );
}
