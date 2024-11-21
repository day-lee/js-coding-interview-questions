// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

// array has a method reverse()
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("CodingMoney"));

// Use a for...of loop to prepend each character to the 'reversed' string.
function reverse3(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
console.assert(reverse3("hi") === "ih", "test1 fail");
console.assert(reverse3("hello") === "olleh", "test2 fail)");
console.assert(reverse3("CodingMoney") === "yenoMgnidoC", "test3 fail");
console.log("reverse3 test done");
