// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('How are you?') --> 5
//   vowels('Coding Money') --> 4
//   vowels('why?') --> 0

// option 1. regex (interviewer might not like it...)
function vowels(str) {
  // regex .match will return array
  const vowel = str.match(/[aeiou]/gi);
  return vowel ? vowel.length : 0;
}

console.log(vowels("Hi There!")); // 3
console.log(vowels("How are you?")); // 5
console.log(vowels("Coding Money")); // 4
console.log(vowels("why?")); // 0

// option 2.
function vowelsCounter(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, "");
  const vowels = ["a", "e", "i", "o", "u"];

  let vowelCount = 0;
  for (let letter of cleanedStr) {
    if (vowels.includes(letter)) vowelCount += 1;
  }

  return vowelCount;
}

console.log(vowelsCounter("Hi There!")); // 3
console.log(vowelsCounter("How are you?")); // 5
console.log(vowelsCounter("Coding Money")); // 4
console.log(vowelsCounter("why?")); // 0
