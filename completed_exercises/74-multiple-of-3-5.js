function solution(number){
  // if number is negative return 0
  // below "number" find 3, 5 fizzbuzz 15, store them in an array, make a set
  // loop through and return divide by 3 or 5 and set 
  let arr = [];
  for (let i = 1; i < number; i++){
    if (i < 0){
      return 0
    }
    else if (i % 3 === 0 || i % 5 === 0){
      arr.push(i)
    }
  }
  const result = arr.reduce((acc, cur) => acc + cur, 0)
  return result
}

console.log(solution(10)) // 23
console.log(solution(20)) // 78

// no need to store them in an array, no duplicate issue with 3 and 5 multiples    
// function solution(number){
//   var sum = 0;
  
//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }
// console.log(solution(20))