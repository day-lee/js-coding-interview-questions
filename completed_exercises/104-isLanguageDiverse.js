/*
Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is 
** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.

*/

function isLanguageDiverse(list) {

/*
store the count data
{js: 1, ruby: 3, python: 2} // max is more than 2 times higher than min, false

1.store the numbers first, reduce to count obj

2.how to extract min & max
min max how to get min() max() or loop through to get each values?
values to array and compare? [1,3,2] doesn't need to know the key just compare the value
*/

    const count = list.reduce((acc, curr) => {
        switch( curr.language ) {
            case('Python'):
                acc.Python++;
                break;
            case('Ruby'):
                acc.Ruby++;
                break;
            case('JavaScript'):
                acc.JavaScript++;
                break;
        }
        return acc
    }, {Python: 0, Ruby: 0, JavaScript: 0})

    const min = Math.min(...Object.values(count))
    const max = Math.max(...Object.values(count))
    return min * 2 >= max
}

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

console.log(isLanguageDiverse(list1)) // false




function isLanguageDiverseRefactored(list) {
    // destructuring the key and make it a variable 
    // 확장성 있어짐
    // curr에는 원래 객체 전체가 들어옴, 여기서 language만 필요하니 destructuring해서
    // const { language } = curr 을 파라미터로 바로 넣어버림  
    const count = list.reduce((acc, { language }) => {
        // 만약 curr 로 받았다면 acc[curr.language]
        // 아니면 const { language } = curr 로 꺼내거나
        switch(language) {
            case(language):
                acc[language] = (acc[language] || 0) + 1;
                break;
        }
        return acc
    }, {})

    const min = Math.min(...Object.values(count))
    const max = Math.max(...Object.values(count))
    return min * 2 >= max
}


var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

console.log(isLanguageDiverseRefactored(list1)) // false