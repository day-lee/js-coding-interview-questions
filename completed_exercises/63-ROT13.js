/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) {
  // 65 is A in unicode
  // const upperCaseAlphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const alphabetArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let result = [];
  const arr = str.toUpperCase().split("");

  for (let i = 0; i < arr.length; i++) {
    if (/[A-Z]/.test(arr[i])) {
      let shiftedIndex = alphabetArr.indexOf(arr[i]) + 13;
      shiftedIndex > 25 ? (shiftedIndex -= 26) : shiftedIndex;
      result.push(alphabetArr[shiftedIndex]);
    } else {
      result.push(arr[i]);
    }
  }
  console.log(result.join(""));
  return result.join("");
}

rot13("SERR PBQR PNZC"); // FREE CODE CAMP
rot13("sERR YBIR2?"); // FREE LOVE2?
