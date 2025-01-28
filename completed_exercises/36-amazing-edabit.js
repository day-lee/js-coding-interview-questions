// option 1. string
function amazingEdabit(str) {
  const edabitRegex = /edabit/;

  if (!edabitRegex.test(str)) {
    let arr = str.split(" ");
    newStr = arr[0] + " " + arr[1] + " " + "not " + arr[2];
    return newStr;
  } else return str;
}

// option 2. ternary
function amazingEdabit(str) {
  const edabitRegex = /edabit/;
  return edabitRegex.test(str) ? str : str.replace("is", "is not");
}

console.log(amazingEdabit("edabit is amazing.")); //➞ "edabit is amazing."

console.log(amazingEdabit("Mubashir is amazing.")); //➞ "Mubashir is not amazing."

console.log(amazingEdabit("Infinity is amazing.")); //➞ "Infinity is not amazing."
