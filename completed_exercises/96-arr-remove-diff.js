/*
Implement a function that computes the difference between two lists. 
The function should remove all occurrences of elements from the first list (a)
that are present in the second list (b).
The order of elements in the first list should be preserved in the result.

동사 먼저 찾기 - 메소드 결정

KEYWORDS
1. only keep, exclude, remove, satisfy, without, difference -> filter()
2. return a new array, transform, convert every item..., apply function to each -> map()
3. check if, determine weather, contain, find the position of -> includes(), indexOf()  
4. array to single value, sum, total, accumulates, count occurrences of -> reduce() 
5. order,arrange, rank, asc, desc, alphabetically -> sort()
6. first elements that, find the index where -> find(), findIndex() 
7. nested array, flatten, 2d array to 1d -> flat(), flatMap() 
*/

function arrDiff(a, b) {
    return a.filter(item => !b.includes(item))
}

console.log(arrDiff([1, 2, 2, 4], [2])); // [1, 4]
console.log(arrDiff([4, 1, 2, 3, 4], [2, 4])); // [1, 3]
