/*
Write the definition of the function "say" such that calling this:

say("Hello")("World")
returns "Hello World"

*/

// option 1
const say = (string1) => (string2) => `${string1} ${string2}`;

// option 2
const say = (string1) => (string2) => [string1, string2].join(" ");

console.log(say("Hello")("World"));
