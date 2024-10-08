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
  // create a function that cleans the string to contain only alphabets
  function sanitiser(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z]/g, "");
  }

  const sanitisedStringA = sanitiser(stringA);
  const sanitisedStringB = sanitiser(stringB);

  // Edge case: if the lengths are not equal after sanitising, they can't be anagrams
  if (sanitisedStringA.length !== sanitisedStringB.length) return false;

  let countA = {};
  let countB = {};

  // count the occurences of the letter
  for (let letter of sanitisedStringA) {
    countA[letter] = (countA[letter] ?? 0) + 1;
  }

  for (let letter of sanitisedStringB) {
    countB[letter] = (countB[letter] ?? 0) + 1;
  }

  // compare the each letter in the count object
  for (letter in countA) {
    if (countA[letter] !== countB[letter]) {
      return false;
    }
    return true;
  }
}

console.assert(
  anagramsObj("RAIL! SAFETY!", "fairy tales") === true,
  "obj test1 fail"
);
console.assert(
  anagramsObj("coding money", "money coding") === true,
  "obj test2 fail"
);
console.assert(
  anagramsObj("Hi there", "Bye there") === false,
  "obj test3 fail"
);
console.assert(
  anagramsObj("1 suNny d@y", "D@y 1SUNNY") === true,
  "obj test4 fail"
);
console.log("test anagramObj done");

// option2. compare the Map count
function anagramsMap(stringA, stringB) {
  function sanitiser(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z]/g, "");
  }

  const sanitisedStringA = sanitiser(stringA);
  const sanitisedStringB = sanitiser(stringB);

  if (sanitisedStringA.length !== sanitisedStringB.length) return false;

  const mapA = new Map();
  const mapB = new Map();

  for (let letter of sanitisedStringA) {
    mapA.set(letter, (mapA.get(letter) || 0) + 1);
  }
  for (let letter of sanitisedStringB) {
    mapB.set(letter, (mapB.get(letter) || 0) + 1);
  }

  for (let letter of sanitisedStringA) {
    if (mapA.get(letter) !== mapB.get(letter)) {
      return false;
    }
    return true;
  }
}

console.assert(
  anagramsMap("RAIL! SAFETY!", "fairy tales") === true,
  "map test1 fail"
);
console.assert(
  anagramsMap("coding money", "money coding") === true,
  "map test2 fail"
);
console.assert(
  anagramsMap("Hi there", "Bye there") === false,
  "map test3 fail"
);
console.assert(
  anagramsMap("1 suNny d@y", "D@y 1SUNNY") === true,
  "map test4 fail"
);
console.log("test anagramMap done");

//option 3. compare the sorted string
/* Option 3 (Sort and Compare) is less optimal because sorting takes O(n log n) time, making it slower for large inputs. */
function anagramSortCompare(stringA, stringB) {
  // clean the string and sort alphabetically
  function sanitiseAndSort(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");
  }

  const sanitisedStringA = sanitiseAndSort(stringA);
  const sanitisedStringB = sanitiseAndSort(stringB);
  // compare the string
  if (sanitisedStringA !== sanitisedStringB) {
    return false;
  }
  return true;
}

console.log(anagramSortCompare("coding money", "money coding"));

console.log(anagramSortCompare("RAIL! SAFETY!", "fairy tales"));
console.log(anagramSortCompare("Hi there", "Bye there"));

// option 4. one frequency counter

function anagramOneCounter(stringA, stringB) {
  function sanitiser(str) {
    return str.toLowerCase().replace(/[^a-z]/g, "");
  }

  const sanitisedStringA = sanitiser(stringA);
  const sanitisedStringB = sanitiser(stringB);

  const count = {};

  for (let letter of sanitisedStringA) {
    count[letter] = (count[letter] ?? 0) + 1;
  }

  for (let letter of sanitisedStringB) {
    // case1. letter doesn't exist in stringA: "count[letter] = undefined is falsy" so (!false === true) and return false, not anagram
    // case2. letter count doesn't match: "count[letter] = 0", 0 is falsy, (!false === true) and return falase, not anagram
    if (!count[letter]) {
      return false;
    }
    // check the case 2
    count[letter]--;
  }

  return true;
}

console.log(anagramOneCounter("coding money", "money coding"));
console.log(anagramOneCounter("RAIL! SAFETY!", "fairy tales"));
console.log(anagramOneCounter("Hi there", "Bye there"));
