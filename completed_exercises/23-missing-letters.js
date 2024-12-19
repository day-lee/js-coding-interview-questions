/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const startIndex = alphabet.indexOf(str[0]);
  const origianStr = alphabet.slice(startIndex, startIndex + str.length + 1);

  for (let i of origianStr) {
    if (!str.includes(i)) {
      console.log(i);
    }
  }
}

fearNotLetter("abce"); //should return the string d.
fearNotLetter("stvwx"); //should return the string u.
