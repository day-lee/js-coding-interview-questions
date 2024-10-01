// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // create a hash map to store the character counts
  let letters = {};
  let max = 0;
  let result = "";

  // counts occurrences of each character
  for (let i of str) {
    letters[i] = (letters[i] || 0) + 1;
    // letters[i] = ++letters[i] || 1;
    // letters[i] = letters[i] + 1 || 1;
  }

  // compare each character and store the character with the highest count
  // option 1. for loop
  //   for (let i of Object.entries(letters)) {
  //     if (i[1] > max) {
  //       max = i[1];
  //       result = i[0];
  //     }
  //   }

  // option 2. Object.entries()
  //   for (const [key, value] of Object.entries(letters)) {
  //     if (value > max) {
  //       max = value;
  //       result = key;
  //     }
  //   }

  // option 3. for... in (object)
  for (let key in letters) {
    if (letters[key] > max) {
      max = letters[key];
      result = key;
    }
  }

  return result;
}
console.log(maxChar("11222vvvvvv") === "v");
console.log(maxChar("abcccccccd") === "c");
console.log(maxChar("apple 1231111") === "1");
