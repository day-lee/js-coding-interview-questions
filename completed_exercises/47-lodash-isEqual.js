/*
Learn Lodash: isEqual, Check if Two Items Are Equal
Write your own version of the lodash _.isEqual function using vanilla JavaScript
 (so, no external libraries - namely, lodash; don't import it). isEqual performs a deep comparison between two values to determine if they are equal.
  You can use it to compare arrays, booleans, dates, objects, sets, regexs, and typed arrays.

This is used as a helper function for many more advanced lodash functions in instances where comparison between objects or arrays is needed,
 but regular JavaScript comparison is too strict.
*/

function isEqual(value, other) {
  //  primitive comparison
  if (value === other) return true;

  //  NaN comparison: check each value
  if (Number.isNaN(value) && Number.isNaN(other)) return true;

  // null comparison: typeof null returns `object`, prevent null value for object comparison.
  if (value === null || other === null) return value === other;

  // array comparison
  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) return false;

    for (let i = 0; i < value.length; i++) {
      if (value[i] !== other[i]) return false;
    }
    return true;
  }

  // object: as long as object includes same properties and values, it is considered same regardless of order of appearance.
  if (typeof value === "object" && typeof other === "object") {
    if (Object.keys(value).length !== Object.keys(other).length) return false;

    for (let [k, v] of Object.entries(value)) {
      if (!other.hasOwnProperty(k)) return false;
      if (other[k] !== v) return false;
    }
    return true;
  }

  return false;
}

var object = { b: 2, a: 1 };
var other = { a: 1, b: 2 };
console.log(`compare: ${object === other}`); // false -> different reference variables
console.log(isEqual(object, other)); // true

var object = [1, 2, 3];
var other = [2, 1, 3];
console.log(`compare: ${object === other}`); // false
console.log(isEqual(object, other)); // false
