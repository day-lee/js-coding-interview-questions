/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
  - group itself is optional
  - caret sign can only appear at the beginning of the match (when it's part of a group)
*/
const countryCodeRegex = /^(1[-\s]?)?/; // /^(1[-\s]?)?$/ this pattern was used to breakdown version to check validity 
// console.log(countryCodeRegex.test("")); // T
// console.log(countryCodeRegex.test("1 ")); // T
// console.log(countryCodeRegex.test("1-")); // T
// console.log(countryCodeRegex.test("1")); // T
// console.log(countryCodeRegex.test("12")); // F
// console.log(countryCodeRegex.test("-")); // F
// console.log(countryCodeRegex.test(" ")); // F

const areaCodeRegex = /(\(\d{3}\)[-\s]?|\d{3}[-\s]?)/;
// console.log(areaCodeRegex.test("(111)")); // T
// console.log(areaCodeRegex.test("(111) ")); // T
// console.log(areaCodeRegex.test("(111)-")); // T
// console.log(areaCodeRegex.test("121")); // T
// console.log(areaCodeRegex.test("1 ")); // F
// console.log(areaCodeRegex.test("(111-111")); // F
// console.log(areaCodeRegex.test("111)222")); // F

/*
   - dollar sign can only appear at the end of the match (It's part of a group)
*/
const numbersRegex = /\d{3}[-\s]?\d{4}$/;
//const regex3 = /(\d{3}[- ]?)(\d{3}[- ]?)(\d{4})/;

// console.log(numbersRegex.test("555-5555")); //T
// console.log(numbersRegex.test("5555555")); //T
// console.log(numbersRegex.test("555 5555")); //T
// console.log(numbersRegex.test("555+5555")); //F

const phoneNumberRegex = new RegExp(
  `${countryCodeRegex.source}${areaCodeRegex.source}${numbersRegex.source}`
);

// console.log(phoneNumberRegex.test("1-555-555-5555")); //T
// console.log(phoneNumberRegex.test("(555)555-5555")); //T
// console.log(phoneNumberRegex.test("555 555-5555")); //T
// console.log(phoneNumberRegex.test("1 555-555-5555")); //T
// console.log(phoneNumberRegex.test("1(555)-555-5555")); //T
// console.log(phoneNumberRegex.test("12 555-555-5555")); //F
// console.log(phoneNumberRegex.test("(555 555 5555")); // F
// console.log(phoneNumberRegex.test("1(555 555 5555")); // F
