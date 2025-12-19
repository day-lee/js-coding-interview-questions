/*
HackerRank practice problem
Count Elements Greater Than Previous Average
Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.
Example

Input
responseTimes = [100, 200, 150,300]
Output
2

Explanation

- Day 0: 100 (no previous days, skip) 
- Day 1: 200 > average(100) = 100 → count = 1 
- Day 2: 150 vs average(100, 200) = 150 → not greater → count = 1 
- Day 3: 300 > average(100, 200, 150) = 150 → count = 2 Return 2.
Input Format

The first line contains an integer n (0 ≤ n ≤ 1000), the number of days.
If n > 0, the next n lines contains an integer representing responseTimes[i].
If n = 0, the second line is omitted or empty.

Example
4
100
200
150
300
*/

function countResponseTimeRegressions(responseTime) {
    /*
    sum
    average
    totalCount
    greaterCount 
    index -> for loop
    */
    let average = responseTime[0];
    let sum = average;
    let greaterCount = 0;

    if (responseTime.length <= 1) {
        return 0;
    }

    for (let i = 1; i <= responseTime.length - 1; i++){
        if(responseTime[i] > average) {
            greaterCount++;
        }
        sum = sum + responseTime[i];
        average = sum / (i + 1);
    }
    console.log(greaterCount);
    return greaterCount;
}



countResponseTimeRegressions([100, 200, 150, 300]) // 2
countResponseTimeRegressions([1, 2, 3, 4, 5]) // 4
countResponseTimeRegressions([5, 4, 3, 2, 1]) // 0
countResponseTimeRegressions([10, 20, 30]) //2
