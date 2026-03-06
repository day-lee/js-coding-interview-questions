/*
Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
고차함수는
1. 함수를 인자로 전달받는 경우 => 콜백
2. 함수를 결과로 반환하는 경우 

write a function that when executed as findAdmin(list1, 'JavaScript')
 returns only the JavaScript developers who are GitHub admins:
*/


function findAdmin(list, lang) {
    // only -> filter 
    return list.filter(person => person.githubAdmin === 'yes' && person.language === lang)
}



var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

console.log(findAdmin(list1, 'JavaScript'))

/*
[
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
]
*/