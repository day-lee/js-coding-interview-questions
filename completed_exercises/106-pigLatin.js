/*
pig latin

early return condition
4. any non-alpha char -> null : regex 

0. convert all to lowercase

1. first index with vowel: aeiou -> original + way 
6. check any of them are vowels, no vowels then return original string + ay 
2. first index with consonant: swap first to end of index until the first vowel. and add ay   

5. simple random strings not just english words? what does that mean? 
 
*/

function pigLatin(string){
  // convert the string to lowercase 
  const lowerString = string.toLowerCase();
  const vowels = 'aeiou';

  const regex = /^[a-z]+$/
  // loop through string   
  // early return null: check any non-alphanumeric char with text() regex method
  if (!regex.test(lowerString)) return null
  // if no vowels using , then lowerstring + ay
  if ([...lowerString].every(i => !vowels.includes(i))) return lowerString + 'ay';

  if (vowels.includes(lowerString[0])) return lowerString + 'way';
  // if index 0 not aeiou, find where is the first vowel appears, with indexOf()
  for (let i of lowerString) {
    if (vowels.indexOf(i) !== -1) {
        console.log(lowerString.slice(vowels.indexOf(i)))
       return  console.log(0, lowerString.slice(vowels.indexOf(i)+1) + lowerString.slice(0, vowels.indexOf(i)) + 'ay')
    }
  } 
}

function pigLatinSingle(string) {
    // 논리 순서가 중요하다 
    // cleanse to lowercase
    const lower = string.toLowerCase()
    // check if it includes any non alphabet: regex  
    const regexAlphabet = /^[a-z]+$/
    if (!regexAlphabet.test(lower)) return null
    // check if it doesn't contain any vowel: bigger range, so check before the first occurrence of vowel. 
    const regexVowels = /[aeiou]/
    if (!regexVowels.test(lower)) return lower + 'ay'
    // check if string[0]start with vowel
    if (regexVowels.test(lower[0])) return lower + 'way'
    // find the first occurrence of vowel and slice to make a new string. 
    // is there a char match among the list of vowels, if it does give me the index. 
    for (let char of lower) {
        if (regexVowels.test(char)) {
           const firstVowel = lower.indexOf(char);
           return lower.slice(firstVowel) + lower.slice(0, firstVowel) + 'ay'
        }
    }
}
// write the test cases first 
console.log(pigLatinSingle('apple')) // appleway
console.log(pigLatinSingle('bee')) // eebay
console.log(pigLatinSingle('brandY')) // andybray
console.log(pigLatinSingle('brandy2!')) // null
console.log(pigLatinSingle('cbv')) // cbvay 



