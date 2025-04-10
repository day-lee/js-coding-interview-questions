//other answers
// 1. Factorial

// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }

//   function factorial2(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }

//   // 1-2. Factorial with validation

//   function factorial(n) {
//     if (n < 0) {
//       throw new Error("Input must be a non-negative integer.");
//     }
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }

//   function factorial2(n) {
//     if (n < 0) {
//       throw new Error("Input must be a non-negative integer.");
//     }
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }

// //1 fatorial using a recursive funciton
// function factorial(n) {
//     // base case
//     if (n === 1) {
//       return 1 }
//     // call its own function recursively until it reaches the base case
//     // once it reaches 1, then call the function in reverse order
//      return factorial(n-1) * n ;
//  }

// //1-2 factorial using a recursive funciton with validation
// function factorial(num) {
// // type validation before the calculation
// if (typeof(num) == 'number' && num > 0){
//     // base case
//     if (num === 1) {
//       return 1 }
//     // call its own function recursively until it reaches the base case
//     // once it reaches 1, then call the function in reverse order
//      return factorial(num-1) * num ;
//    }
//  else return "Type Error"
//  }

// console.log(factorial('5'))
// console.log(factorial('Hello'))
// console.log(factorial(5))
// console.log(factorial(-5))
// console.log(factorial([5]))
// console.log(factorial({5:1}))
// console.log(factorial(null))

// /*  for reference
//     5*4*3*2*1
//     4*3*2*1
//     3*2*1
//     2*1
//     1

//   fac 5 : fac 4 * 5 return 120
//   fac 4 : fac 3 * 4 return 24
//   fac 3 : fac 2 * 3 return 6
//   fac 2 : fac 1 * 2 return 2
//   fac 1 : return 1 */
// //1 factorial using a for loop
//  function factorial(n) {
//      // assign the base case to a new variable result
//      let result = 1
//      // repeat mutiplying n and assign the new value to result until i > 1
//      for (let i = n; i > 1; i--) {
//       result = result * i
//      }
//  	return result
//  }
// //1-2 factorial using a for loop with validation
//  function factorial(n) {
//   // type validation before the calculation
//    if (typeof(n) == 'number' && n > 0) {
//          // assign the base case to a new variable result
//          let result = 1
//          // repeat multiplying n and assign it to result until i > 1
//          for (let i = n; i > 1; i--) {
//           result = result * i
//          }
//          return result
//        }
//     return "type error"

//  }
