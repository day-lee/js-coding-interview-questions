/* Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise. */

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

// option 1 - every() - tests whether "all" elements in the array pass the test
function isEveryoneHere(userObj) {
  let names = ["Ryan", "Alan", "Jeff", "Sarah"];
  return names.every((item) => userObj.hasOwnProperty(item) === true);
}

// option 2 - &&
function isEveryoneHere(userObj) {
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Ryan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah")
  )
    return true;
  else return false;
}

// option 3 - && loop
function isEveryoneHere(userObj) {
  let names = ["Ryan", "Alan", "Jeff", "Sarah"];
  for (let i of names) {
    if (!userObj.hasOwnProperty(i)) return false;
  }
  return true;
}

console.log(isEveryoneHere(users));
