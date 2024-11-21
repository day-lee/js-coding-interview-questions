/* Compare and update the inventory stored in a 2D array against
a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). 
If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(currentInventory, newInventory) {
  // loop through each item in the new delivery inventory
  newInventory.forEach((newItem) => {
    // check if the current inventory contains the item
    const existingItem = currentInventory.find(
      (item) => item[1] === newItem[1]
    );
    // if the item exists, update the quantity
    if (existingItem) {
      existingItem[0] += newItem[0];
      // if the item doesn't exist, add it to the current inventory
    } else {
      currentInventory.push(newItem);
    }
  });
  // option1. sort the inventory alphabetically by item name with localCompare
  //currentInventory.sort((a, b) => a[1].localeCompare(b[1]));

  // option2. simple comparison
  currentInventory.sort((a, b) => (a[1] > b[1] ? 1 : -1));

  return currentInventory;
}

// option1. compare nested arrays
function testArray(result, expectedResult) {
  for (let i = 0; i < result.length; i++) {
    if (
      result[i][0] != expectedResult[i][0] ||
      result[i][1] != expectedResult[i][1]
    )
      return false;
  }
  return true;
}

// option2. compare by converting them to strings (recommended)
function testString(result, expectedResult) {
  return JSON.stringify(result) === JSON.stringify(expectedResult);
}

const result1 = updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);

const expectedResult1 = [
  [88, "Bowling Ball"],
  [2, "Dirty Sock"],
  [3, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [5, "Microphone"],
  [7, "Toothpaste"],
];

const result2 = updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  []
);
const expectedResult2 = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];
const result3 = updateInventory(
  [],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);

const expectedResult3 = [
  [67, "Bowling Ball"],
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [7, "Toothpaste"],
];

const result4 = updateInventory(
  [
    [0, "Bowling Ball"],
    [0, "Dirty Sock"],
    [0, "Hair Pin"],
    [0, "Microphone"],
  ],
  [
    [1, "Hair Pin"],
    [1, "Half-Eaten Apple"],
    [1, "Bowling Ball"],
    [1, "Toothpaste"],
  ]
);

const expectedResult4 = [
  [1, "Bowling Ball"],
  [0, "Dirty Sock"],
  [1, "Hair Pin"],
  [1, "Half-Eaten Apple"],
  [0, "Microphone"],
  [1, "Toothpaste"],
];

// running array tests
console.assert(testArray(result1, expectedResult1) === true, "test1 fail");
console.assert(testArray(result2, expectedResult2) === true, "test2 fail");
console.assert(testArray(result3, expectedResult3) === true, "test3 fail");
console.assert(testArray(result4, expectedResult4) === true, "test4 fail");
console.log("array test done");

// running string tests
console.assert(testString(result1, expectedResult1), "Test 1 failed");
console.assert(testString(result2, expectedResult2), "Test 2 failed");
console.assert(testString(result3, expectedResult3), "Test 3 failed");
console.assert(testString(result4, expectedResult4), "Test 4 failed");
console.log("string test done");

/* 
When to Use localeCompare():
- sort() can handle English alphabet but localeCompare() is more robust
- case incensitive sorting
- different languages 
*/
