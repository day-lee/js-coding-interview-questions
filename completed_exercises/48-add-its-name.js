/*
Given three arguments ⁠— an object obj of the stolen items,
 the pet's name and a value ⁠—
  return an object with that name and value in it (as key-value pairs).
*/

function addName(obj, name, value) {
  // shallow copy to avoid modifying the original object using spread operator
  const newObj = { ...obj };
  // add a new key-value pair
  newObj[name] = value;
  return newObj;
}

addName({}, "Brutus", 300); // { Brutus: 300 }
addName({ piano: 500 }, "Brutus", 400); // { piano: 500, Brutus: 400 }
addName({ piano: 500, stereo: 300 }, "Caligula", 440); // { piano: 500, stereo: 300, Caligula: 440 }
