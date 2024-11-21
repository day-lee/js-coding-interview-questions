// remove duplicate numbers from an Array
// removeFunc([1,3,3,3,1,5,6,7,8,1]) // [1,3,5,7,8]

//option 1
function removeDuplicate(arr) {
  const set = new Set(arr);
  console.log(Array.from(set));
}
removeDuplicate([1, 3, 3, 1, 5, 6, 7, 8, 1]);

//option 2
function removeDuplicate2(arr) {
  let newArr = [];
  for (let i of arr) {
    if (!newArr.includes(i)) {
      newArr.push(i);
    }
  }
  console.log(newArr);
}
removeDuplicate2([1, 3, 3, 1, 5, 6, 7, 8, 1]);
