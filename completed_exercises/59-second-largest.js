//Find the Second Largest Number

function secondLargest(arr) {
const newArr = arr.filter(item => typeof item === 'number').sort((a, b)=> a - b)
console.log(newArr[1])
}

secondLargest([10, 40, 30, 20, -50])
secondLargest(['a', 10, 'n', 40, 30, 20, 50])
secondLargest([10, 40, 3.2, 2.4, 5.0])