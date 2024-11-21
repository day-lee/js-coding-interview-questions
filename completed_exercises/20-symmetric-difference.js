/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
*/

// option1. filter with logical OR operators
function symmetricDiff(arr1, arr2) {
  let concatArr = arr1.concat(arr2);

  return concatArr.filter(
    (item) => !arr1.includes(item) || !arr2.includes(item)
  );
}

// option2. counter - three loops not the best for space and time complexity
function symmetricDiff(arr1, arr2) {
  const newArr = [];
  let counter = new Map();

  arr1.forEach((item) => {
    counter.set(item, (counter.get(item) ?? 0) + 1);
  });
  arr2.forEach((item) => {
    counter.set(item, (counter.get(item) ?? 0) + 1);
  });

  for (let [k, v] of Array.from(counter)) {
    if (v === 1) {
      newArr.push(k);
    }
  }

  return newArr;
}

console.log(symmetricDiff([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]
console.log(
  symmetricDiff(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
); // ["pink wool"]

console.log(
  symmetricDiff(
    ["andesite", "grass", "dirt", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"]
  )
); // []
