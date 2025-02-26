/*
Find the number of passengers left in the bus after a last bus stop
First element in the array represents first stop. It always starts with [?, 0]
Last element in the array represents last stop.
*/

// option 1
const passengerNumbers = function (busStops) {
  let currentNum = busStops[0][0];
  for (let i = 1; i < busStops.length; i++) {
    currentNum = currentNum + busStops[i][0] - busStops[i][1];
  }
  console.log(currentNum);
  return currentNum;
};

// option 2
const passengerNumbers = (busStops) => {
  console.log(
    busStops.reduce((result, [on, off]) => {
      result = result + on - off;
      return result;
    }, 0)
  );
};

passengerNumbers([
  [10, 0],
  [3, 5],
  [5, 8],
]); //5

passengerNumbers([
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
]); //17

passengerNumbers([
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
]); // 21

passengerNumbers([[0, 0]]); //0
