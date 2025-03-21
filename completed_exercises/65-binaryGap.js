function solution(N) {
  const binaryNum = N.toString(2);
  console.log(binaryNum)
  const start = binaryNum.indexOf(1);
  let result = [];
  let count = 0;

  for (let i = start + 1; i < binaryNum.length; i++) {
    if (Number(binaryNum[i]) === 0) {
      count += 1;
    } else {
      result.push(count);
      count = 0;
    }
  }
  console.log(result)
  return result.length > 0 ? Math.max(...result) : 0;
}

console.log(solution(1041)) // 10000010001, 5
console.assert(solution(32) === 0, "test 1 fail");
console.assert(solution(5) === 1, "test 2 fail");
console.assert(solution(545) === 4, "test 3 fail");
