/*
Given a list of integers values, your job is to return the sum of the values;
however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

For example:

[ 1, 2, 3] ==> 6

[ 1, 3, 8, 1, 8] ==> 12

[ -1, -1, 5, 2, -7] ==> -1

[] ==> null

*/

function uniqueSum(arr) { 
    // spread operator to make an unique array directly using new Set() 
    // reduce method with null as default value 
    // Use the new Set() constructor with the spread operator to create a new array that contains only unique values.
    /*
    null + 1 = 1 => JS converts null to 0 - Type Coercion 타입 (강압적) 변환... 타입 코어션
    1 + 2 = 3
    3 + 3 = 6
    */
    return [...new Set(arr)].reduce( (acc, curr) => acc + curr, null)
}

console.log(uniqueSum([ 1, 2, 3])) // 6
console.log(uniqueSum([ -1, -1, 5, 2, -7])) // -1
console.log(uniqueSum([])) // null