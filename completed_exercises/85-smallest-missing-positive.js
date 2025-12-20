/*
Find the Smallest Missing Positive Integer
Given an unsorted array of integers, find the smallest positive integer not present in the array in O(n) time and O(1) extra space.

Example

Input

orderNumbers = [3, 4, -1, 1]
Output

2
Explanation

We want the smallest positive missing integer.

Start with [3, 4, -1, 1]
- i=0: value 3 ⇒ swap with index 2 ⇒ [-1, 4, 3, 1]
- i=0: value -1 is out of range ⇒ move on
- i=1: value 4 ⇒ swap with index 3 ⇒ [-1, 1, 3, 4]
- i=1: value 1 ⇒ swap with index 0 ⇒ [1, -1, 3, 4]
- now 1 at index 0, 3 at 2, 4 at 3; -1 remains at index 1

Scan from index 0:
index 0 has 1 (correct), index 1 has -1 (not 2) ⇒ missing positive is 2

*/
// 교환 정렬 
function exchangeSort(arr){
    const result = [...arr];
    for (let i = 0; i < result.length; i++){
        for (let j = i + 1; j < result.length; j++){
            if (result[i] > result[j]) {
                [result[i], result[j]] = [result[j], result[i]]
            }
             console.log(result)
        }
       
       
    }
    return result
}
// 시간 복잡도 O(n^2)
console.log(exchangeSort([2, 12, -9, 1])) // -9, 1, 2, 12
console.log(exchangeSort([2, 12, -9, 1])) // -9, 1, 2, 12

// -9 12 2 1
// -9 2 12 1 
// -9 1 12 2 
// -9 1 2 12 

function findSmallestMissingPositive(orderNumbers){
    const sortedPositiveArr = orderNumbers.filter( i => i > 0).sort((a, b) => a - b);

    // 정렬된 양수에서 가장 작을 수 있는 수는 1
    // 1이 첫 요소가 아니라면, 존재하지 않는 첫 요소는 무조건 1 
    // 1이 첫 요소인가? 맞으면, + 1 해가며 룹 돌리면서 그 다음 숫자찾고 , 아니면, 1 반환

    let expectedNum = 1; 
    if (sortedPositiveArr[0] === expectedNum) {
        for (let i of sortedPositiveArr) {
            // expectedNum exists in an array
            if (i == expectedNum) {
            // find the next num
                expectedNum += 1;
            }
        }
        // i !== expectedNum in an ordered array means missing num
         return expectedNum
    } 
 return expectedNum;
}


console.log(findSmallestMissingPositive([-1, 4, 2, 1])) // 3
console.log(findSmallestMissingPositive([-11, -1, 1, 3])) // 2
console.log(findSmallestMissingPositive([-3, 2, 3, 99])) // 1


