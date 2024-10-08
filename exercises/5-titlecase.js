// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
//   capitalize('what is titlecase?') --> 'What Is Titlecase?'
//   capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

// option 1
function capitalize(str) {
  // split the string into an array of words
  const words = str.split(" ");
  console.log(words);
  let result = [];
  // capitalise the first letter of each word and add the rest of the word
  // push the transformed word into the result array
  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  // join the array back into a string
  return result.join(" ");
}

console.log(capitalize("this is mukhtar from coding money"));
console.log(capitalize("what is titlecase?"));
console.log(
  capitalize("titles of books, movies, songs, plays and other works")
);

// option 2. map()
function capitalize2(str) {
  const words = str.split(" ");
  console.log(words);
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
  q;
}

console.log(capitalize2("this is mukhtar from coding money"));
console.log(capitalize2("what is titlecase?"));
console.log(
  capitalize2("titles of books, movies, songs, plays and other works")
);
