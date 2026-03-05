/*
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

*/

function getAverageAge(list) {
    let age = 0;
    list.forEach( person => {
       age += person.age
    })
    return Math.round(age / list.length);
}

let list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

console.log(getAverageAge(list1)) // 50

/** 
 * Math.round(): 0.5 기준 반올림
 * Math.ceil(): 올림 - 크거나 같은 정수
 * Math.floor(): 내림, 버림 - 소수점 버리고 작거나 같은 정수 => 숫자 값 확신할 때 
 * parseInt(): 문자열을 정수로 변환, 소수점 버림, 단 숫자로 시작할때만 유효, 문자로 시작하는 경우 NaN 리턴
**/