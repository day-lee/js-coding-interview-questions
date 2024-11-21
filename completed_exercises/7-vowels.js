// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('How are you?') --> 5
//   vowels('Coding Money') --> 4
//   vowels('why?') --> 0

// option1. counter
function vowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

console.log(vowels("Coding Money"));

// option2. regex match
function vowelsregex(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// option3. regex replace, length
function vowelsregex2(str) {
  return str.replace(/[^aeiou]/g, "").length;
}

console.log(vowelsregex2("hello"));
