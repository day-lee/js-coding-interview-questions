// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// USE MAP, FASTER LOOKUP
console.time("execution time1");
function maxChar1(str) {
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
// console.log(maxChar("11222vvvvvv") === "v");
// console.log(maxChar("abcccccccd") === "c");
// console.log(maxChar("apple 1231111") === "1");
console.assert(maxChar1("abcccccccd") === "c", "test 1 fail");
console.assert(maxChar1("apple 1231111") === "1", "test 2 fail");
console.assert(
  maxChar1(
    "aaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  ) === "e",
  "test 3 fail"
);
//console.log("test 1 done");
console.timeEnd("execution time1");

// // map
console.time("execution time2");

function maxChar2(str) {
  let counter = new Map();
  for (let item of str) {
    counter.set(item, (counter.get(item) ?? 0) + 1);
  }

  let maxKey = "";
  let maxNum = 0;
  for (let char of Array.from(counter)) {
    //console.log(char);
    if (char[1] > maxNum) {
      maxNum = char[1];
      maxKey = char[0];
    }
  }
  return maxKey;
}
// console.log(maxChar2("abcccccccd"));
// console.log(maxChar2("apple 1231111"));
// console.log(
//   maxChar2(
//     "raccoon is hugging me and he is smelly croissant because he is fermented"
//   )
// );
console.assert(maxChar2("abcccccccd") === "c", "test 1 fail");
console.assert(maxChar2("apple 1231111") === "1", "test 2 fail");
console.assert(
  maxChar2(
    "aaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaasssertmaxmaxmaxnumnumeeeeee12eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  ) === "e",
  "test 3 fail"
);

//console.log("test 2 done");
console.timeEnd("execution time2");
