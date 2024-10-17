// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  /*each row should have odd number of symbol, having spaces evenly 
      (4) 
      1, 3, 5, 7
                            #range   order num start end
      00 01 02 03 04 05 06     3        1   1    3    3
      10 11 12 13 14 15 16   3 4 5      2   3    2    5
      20 21 22 23 24 25 26   3 - 7      3   5    2    7
      30 31 32 33 34 35 36   3 - 9      4        2    9

      (3) 
      1, 3, 5 ... 
                      #range  order num start  end
      00 01 11 12 13    2        1   1    2    2
      10 11 12 13 14  2 3 4      2   3    2    4
      20 21 22 23 24  2 - 6      3   5    2    6
      
      (2)            start   end
      00 01 02   1     1      1 
      10 11 12  1-3    1      3 

      (1)
         start end
      00   0    0

      */

  const start = n - 1;
  let end = start;

  for (let row = 0; row < n; row++) {
    let line = "";

    for (let col = 0; col < 2 * n - 1; col++) {
      if (col + row < start) {
        line += " ";
      } else if (col + row <= end) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
    end += 2;
  }
}

pyramid(1);
console.log("-----------------");
pyramid(2);
console.log("-----------------");
pyramid(3);
console.log("-----------------");
pyramid(14);
