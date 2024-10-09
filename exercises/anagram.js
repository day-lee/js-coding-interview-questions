// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// option 1. compare the object count
function anagramsObj(stringA, stringB) {
  // sanitiser, two counter, compare

  function sanitiser(str) {
    return str.toLowerCase().replace(/[^a-z]/g, "");
  }
  const sanitisedStringA = sanitiser(stringA);
  const sanitisedStringB = sanitiser(stringB);

  if (sanitisedStringA.length !== sanitisedStringB) return false;

  const countA = {};
  const countB = {};
  for (let letter of sanitisedStringA) {
    countA[letter] = (countA[letter] ?? 0) + 1;
  }

  for (let letter of sanitisedStringB) {
    countB[letter] = (countB[letter] ?? 0) + 1;
  }

  //console.log(countA, countB);

  for (let letter of sanitisedStringA) {
    if (countA[letter] !== countB[letter]) {
      return false;
    }
  }
  return true;
}

console.log(anagramsObj("coding money", "money coding"));
console.log(anagramsObj("RAIL! SAFETY!", "fairy tales"));
console.log(anagramsObj("Hi there", "Bye there"));

// option 4. one counter
function anagramsOneCounter(stringA, stringB) {
  // create one counter and compare if B has the same letters of not
  function sanitiser(str) {
    return str.toLowerCase().replace(/[^a-z]/g, "");
  }

  const sanisitedA = sanitiser(stringA);
  const sanisitedB = sanitiser(stringB);
  //  console.log(sanisitedA, sanisitedB);

  const counter = {};

  for (let letter of sanisitedA) {
    counter[letter] = (counter[letter] ?? 0) + 1;
  }

  for (let i of sanisitedB) {
    // if letter doesn't exist
    if (!counter[i]) {
      return false;
    }
    counter[i]--;
  }
  return true;
}

console.log(anagramsOneCounter("coding money", "money coding"));
console.log(anagramsOneCounter("RAIL! SAFETY!", "fairy tales"));
console.log(anagramsOneCounter("Hi there", "Bye there"));
