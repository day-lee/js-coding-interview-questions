// return an array that contains the key value pair

function matchesProperty(arr, key, value) {
  for (let obj of arr) {
    if (obj.hasOwnProperty(key) && obj[key] === value) return [obj];
  }
  return "no match";
}

function matchesProperty(arr, key, value) {
  let result;
  arr.forEach((item) => {
    if (item.hasOwnProperty(key) && item[key] === value) return (result = item);
  });
  return result ? [result] : "no match";
}

// test
const objects = [
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 5, c: 6 },
];

console.log(matchesProperty(objects, "c", 1)); //  no match
console.log(matchesProperty(objects, "d", 2)); //  no match
console.log(matchesProperty(objects, "a", 4)); //  { "a": 4, "b": 5, "c": 6 }
console.log(matchesProperty(objects, "b", 2)); //  { "a": 1, "b": 2, "c": 3 }
