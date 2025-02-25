// bubble sort - smaller elements "bubble" to the top of the list (beginning of the array) 
// as the sorting progresses.
// type coercion (dynamically typed and can convert automatically) 
// allows different type to be compared by converting them in a common type

function sortIt(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        //swap values via deconstruction
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
console.log(sortIt([[4], 1, [3], 2])); // [1, 2, [3], [4]]
