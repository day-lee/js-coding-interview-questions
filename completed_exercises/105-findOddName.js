
function findOddNames(list) {
    const result = list.filter((dev) => {
        let sumChar = 0;
        for (let i of dev.firstName) {
            sumChar += i.charCodeAt(0)
        }
        return (sumChar % 2 !== 0) 
    })
    return result
}

// reduce 
function findOddNames2(list) {
    const result = list.filter((dev) => {
       const sum = [...dev.firstName].reduce((acc, curr) => acc + curr.charCodeAt(0), 0)
       return sum % 2 !== 0
    })
    return result
}


let list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

console.log(findOddNames2(list1))
