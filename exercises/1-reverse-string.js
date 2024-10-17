// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

//option 1
// utilise the built-in array function reverse(), split the string into an array, then join it back into a string
function reverse(str) {
  return str.split("").reverse().join("");
}

console.assert(reverse("hi") === "ih", "test1 fail");
console.assert(reverse("hello") === "olleh", "test2 fail)");
console.assert(reverse("CodingMoney") === "yenoMgnidoC", "test3 fail");
console.log("reverse1 test done");

//option2
// create a new empty string, then loop through the parameter str in reverse order
// adding each character to the new variable.
function reverse2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.assert(reverse2("hi") === "ih", "test1 fail");
console.assert(reverse2("hello") === "olleh", "test2 fail)");
console.assert(reverse2("CodingMoney") === "yenoMgnidoC", "test3 fail");
console.log("reverse2 test done");

// option3
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
