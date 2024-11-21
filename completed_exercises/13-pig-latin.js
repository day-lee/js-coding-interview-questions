// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster,
//move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function pigLatin(str) {
  // keep checking until it meets vowels
  const vowels = "aeiou";
  let consonants = "";

  if (vowels.includes(str[0])) {
    return str + "way";
  }

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      consonants += str[i];
    } else {
      return str.slice(i) + consonants + "ay";
    }
  }
}
// console.log(pigLatin("gove")); // ovegay
// console.log(pigLatin("glove")); // oveglay
// console.log(pigLatin("algorithm")); // algorithway
// console.log(pigLatin("eight")); // eightway






// function pigLatin(string){
// 	const vowel = ['a', 'e', 'i', 'o', 'u'];
//   let consonantStr = '';
//   let vowelStr = '';

// // 스트링의 첫 문자가 모음일 경우
// 	if (vowel.includes(string[0])) {
//   	return string + "way"
//   }
//   else {

//       for (let i = 0; i < string.length; i++){
//         // 자음으로 시작하는 경우 변수 consonantStr 에 추가
//         if (!vowel.includes(string[i])){
//           consonantStr = string.slice(0, i+1)
//         }
//         // 처음으로 모음이 등장할 경우 반복 중단
//         else{
//           vowelStr = string.slice(i)
//           break;
//         }
//       }
//   	return vowelStr + consonantStr + "ay"
//   }

// }
// console.log(pigLatin('glove')) // oveglay
// console.log(pigLatin('algorithm'))// algorithway
// console.log(pigLatin('eight'))// eightway
