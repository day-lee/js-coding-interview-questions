/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

// option 1. if statement
function spinalCase(str) {
  let arr = str.split("");

  const upper = /[A-Z]/;
  const lower = /[a-z]/;
  const dash = /-/;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr[0] = arr[0].toLowerCase();
    }

    if (upper.test(arr[i])) {
      if (lower.test(arr[i - 1])) {
        arr.splice(i, 0, "-");
        i++;
      } else if (!dash.test(arr[i - 1])) {
        arr[i - 1] = "-";
      }
      arr[i] = arr[i].toLowerCase();
    }

    if (!lower.test(arr[i])) {
      arr[i] = "-";
    }
  }

  return console.log(arr.join(""));
}

// option 2. regex

function spinalCase(str) {
  // change white space, _ underscore into -
  const spaceOrUnderscore = /\s|_/g;

  // if lowerUpper pattern, add -
  const lowerUpperPattern = /([a-z])([A-Z])/g;
  let result = str.replace(lowerUpperPattern, "$1 $2");

  // change to lowercase
  result = result.replace(spaceOrUnderscore, "-").toLowerCase();

  console.log(result);
}

spinalCase("This  Is Spinal Tap"); // this-is-spinal-tap
spinalCase("thisIsSpinalTap"); // this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show"); // the-andy-griffith-show
spinalCase("Teletubbies say Eh-oh"); // teletubbies-say-eh-oh
spinalCase("AllThe-small Things"); // all-the-small-things
