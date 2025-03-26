/*
You will be given an array of numbers.
For each number in the array you will need to create an object.
The object key will be the number, as a string. The value will be the corresponding character code, as a string.
Return an array of the resulting objects.
All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.
*/
function numObj(arr) {
  const result = arr.reduce((acc, item) => {
    // let obj = {};
    // obj[item] = String.fromCharCode(item);
    // acc.push(obj);
    acc.push({ [item]: String.fromCharCode(item) });
    return acc;
  }, []);
  console.log(result);
  return result;
}

// function numObj(arr) {
//   const result = arr.map((item) => {
//     return { [item]: String.fromCharCode(item) };
//   });
//   console.log(result);
//   return result;
// }

numObj([118, 117, 120]); // [{'118':'v'}, {'117':'u'}, {'120':'x'}]);
numObj([101, 121, 110, 113, 113, 103]); //,[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]);
