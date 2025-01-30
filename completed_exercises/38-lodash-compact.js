/*
https://edabit.com/challenge/M6fbYyBkzJXMAu39G
According to the lodash documentation, _.compact creates an array with all falsey values removed.
The values false, null, 0, "", undefined, and NaN are falsey.

Your task is to build this helper function without using lodash.
You will write a function that receives an array and removes all falsey values.

Examples
compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]
Notes
Do not attempt to import lodash; you are simply writing your own version.
This entire series of challenges can be found here.

*/

// // option 1. filter()
function compact(arr) {
  const falsy = [0, " ", null, undefined, false];
  const result = arr.filter((item) => !falsy.includes(item));
  console.log(result);
  return result;
}
//option 1-2. filter(), Boolean()
const compact = (arr) => arr.filter((item) => Boolean(item));

// // option 2. forEach()
function compact(arr) {
  let result = [];
  arr.forEach((item) => {
    if (item) result.push(item);
  });
  console.log(result);
  return result;
}

// // option 3. for..of
function compact(arr) {
  // map method is not suitable as it doesn't exit when there is return
  // it ends up collection undefined when element doesn't meet the condition
  // [ 1, undefined, undefined, undefined, undefined, 'banana' ]

  //   const r = arr.map((item) => {
  //     if (item) {
  //       console.log(item);
  //       return item;
  //     }
  //   });

  let result = [];
  for (let item of arr) {
    // if (item) result.push(item);
    item ? result.push(item) : undefined;
  }
  console.log(result);
  return result;
}

// option 4. reduce()
const compact = (arr) =>
  arr.reduce((acc, el) => {
    if (el) {
      acc.push(el);
    }
    return acc;
  }, []);

// option 4-2. reduce()
function compact(arr) {
  arr.reduce((acc, el) => {
    el ? acc.el : undefined;
    return acc;
  }, []);
}

compact([1, 0, false, null, undefined, "banana"]); // [1, 'banana']
compact([]); // []
compact(
  [
    {
      color: "red",
      make: "toyota",
    },
    {
      color: "blue",
      make: "mazda",
    },
  ],
  null
);
//  [
//     {
//       color: "red",
//       make: "toyota",
//     },
//     {
//       color: "blue",
//       make: "mazda",
//     },
//   ]
