/*
You will be provided with an initial array as the first argument to the destroyer function, 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
The function must accept an indeterminate number of arguments, also known as a variadic function.
*/

function destroyer(arr, ...rest) {
  return console.log(arr.filter((item) => !rest.includes(item)));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]

destroyer(["tree", "hamburger", 53], "tree", 53); // ["hamburger"]

destroyer(
  [
    "possum",
    "trollo",
    12,
    "safari",
    "hotdog",
    92,
    65,
    "grandma",
    "bugati",
    "trojan",
    "yacht",
  ],
  "yacht",
  "possum",
  "trollo",
  "safari",
  "hotdog",
  "grandma",
  "bugati",
  "trojan"
); // [12,92,65]
