/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

// 1. regex
function myReplace(str, before, after) {
  let regex = /[A-Z]/;

  if (regex.test(before)) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  return console.log(str.replace(before, after));
}

// 2. filter, map, ternary operator
function myReplace(str, before, after) {
  // in te str, find before and replace it to after but with case sensitivity
  const arr = str.split(" ");

  // use the variable inside the array using filter, filter returns a new array all that matches the word
  const [wordToReplace] = arr.filter((item) => item === before);

  const replacement =
    wordToReplace[0] === wordToReplace[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after[0].toLowerCase() + after.slice(1);

  console.log(
    arr.map((item) => (item === before ? replacement : item)).join(" ")
  );
}

myReplace("Let us go to the store", "store", "mall"); //Let us go to the mall
myReplace("I think we should look up there", "up", "Down"); // I think we should look down there
myReplace("His name is Tom", "Tom", "john"); // His name is John
