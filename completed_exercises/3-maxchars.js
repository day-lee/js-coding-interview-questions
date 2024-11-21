// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// USE MAP, FASTER LOOKUP

// option1.
console.time("execution time1");
function maxChar1(str) {
  // create a hash map to store the character counts
  let letters = {};
  let max = 0;
  let result = "";

  // counts occurrences of each character
  for (let i of str) {
    letters[i] = (letters[i] || 0) + 1;
  }

  for (let key in letters) {
    //console.log(key);
    if (letters[key] > max) {
      max = letters[key];
      result = key;
    }
  }

  return result;
}

console.assert(maxChar1("abcccccccd") === "c", "test 1 fail");
console.assert(maxChar1("apple 1231111") === "1", "test 2 fail");
console.assert(
  maxChar1(
    "aaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  ) === "e",
  "test 3 fail"
);
console.timeEnd("execution time1");

// option2. map
console.time("execution time2");
function maxChar2(str) {
  const counter = new Map();
  for (let i of str) {
    counter.set(i, (counter.get(i) ?? 0) + 1);
  }

  let max = 0;
  let result = "";
  for (let [key, value] of Array.from(counter)) {
    if (value > max) {
      max = value;
      result = key;
    }
  }
  return result;
}
console.assert(maxChar2("abcccccccd") === "c", "test 1 fail");
console.assert(maxChar2("apple 1231111") === "1", "test 2 fail");
console.assert(
  maxChar2(
    "aaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  ) === "e",
  "test 3 fail"
);

console.timeEnd("execution time2");
