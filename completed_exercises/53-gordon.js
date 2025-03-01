/*
you will be given a string of four words. Your job is to turn them in to Gordon language.
Rules:
Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', 
Any other vowel should become '*'.
*/
function gordon(str) {
  const result = str
    .toUpperCase()
    // .replace(/a/gi, "@")
    // .replace(/[eiou]/gi, "*")

    // str.replace() can take a callback function as the second argument
    // to conditionally replace each matched item
    .replace(/[AEIOU]/g, (letter) => (letter == "A" ? "@" : "*"))
    .split(" ")
    .map((item) => item + "!!!!")
    .join(" ");
  //console.log(result);
  return result;
}

gordon("What feck damn cake"); // 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
gordon("i am a chef"); // '*!!!! @M!!!! @!!!! CH*F!!!!'
