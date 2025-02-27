//Create a function that squares every digit of a number.

function squareDigits(num) {
  const arr = num.toString().split("");
  const result = arr.map((item) => item ** 2).join("");
  console.log(result);
  return result;
}

squareDigits(9119); // 811181
squareDigits(2483); //416649
