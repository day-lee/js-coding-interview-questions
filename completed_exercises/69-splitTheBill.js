function splitTheBill(x) {
  if (
    typeof x !== "object" ||
    Array.isArray(x) ||
    x.length === 0 ||
    x === undefined ||
    x === null
  )
    return "Invalid argument!";

  let sum = 0;
  let result = {};
  let eachPayable = 0;
  const arr = Object.entries(x);

  arr.forEach(([person, amount]) => {
    sum += amount;
  });

  eachPayable = sum / arr.length;

  arr.forEach(([person, amount]) => {
    result[person] = !Number.isInteger(amount - eachPayable)
      ? Number((amount - eachPayable).toFixed(2))
      : amount - eachPayable;
  });

  console.log(result);
  return result;
}

splitTheBill({ A: 40, B: 25, X: 10 }); //, {A: 15.00, B: 0.00, X: -15.00});
splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 }); //, {A: -17.20, B: -32.20, C: -47.20, D: 95.80, E: 0.80});
