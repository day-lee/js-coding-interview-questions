// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// similar to chessboard
function steps(n) {
  let pountSymbol = "#";

  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 0; col < n; col++) {
      if (col < row) {
        line += pountSymbol;
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

steps(3);
// '#\n##\n###\n'

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a "#" character. The characters should form a
chessboard.
Passing this string to console.log should show something like this:

```jsx

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.

*/
