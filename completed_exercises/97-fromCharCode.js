const arrowFunc = function(arr) {
  // String.fromCharCode(1,2,3,4)는 숫자를 아스키 캐릭터로 바꾼다. 
  // map 함수는 item 숫자를 받아서 캐릭터로 변환하여 transform, convert 해서 결과값을 낸다. 
  console.log(arr.map(item => String.fromCharCode(item))) // [ 'H', 'e', 'l', 'l', 'o' ]
  return arr.map(item => String.fromCharCode(item)).join(''); //Complete this function
}

console.log(arrowFunc([72, 101, 108, 108, 111])); // Hello