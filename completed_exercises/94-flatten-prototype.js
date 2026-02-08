Array.prototype.flatten = function() {
    const newArr = [];
    for (let char of this) {
    // if array? then recursion. 
    if (Array.isArray(char)) {
       const result = char.flatten() // return array
       newArr.push(...result) // spread 
    } else {
    // else push to new array
        newArr.push(char)
    }
    }
    return newArr
}




console.log([1, 2, 3].flatten()); 
console.log([[1, 2], 3, 4].flatten());