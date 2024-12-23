// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
//   capitalize('what is titlecase?') --> 'What Is Titlecase?'
//   capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

// option 1. map()
function capitalize(str) {
  const words = str.split(" ");
  console.log(words);
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
  q;
}

console.log(capitalize("this is mukhtar from coding money"));
console.log(capitalize("what is titlecase?"));
console.log(
  capitalize("titles of books, movies, songs, plays and other works")
);
