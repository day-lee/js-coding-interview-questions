// return initial of name with dot in the middle

function abbrevName(name) {
  const arr = name.split(" ");
  console.log(arr.map((item) => item[0].toUpperCase()).join("."));
}

abbrevName("Sam Harris"); // S.H
abbrevName("Sam Harris Jack"); // S.H.J
