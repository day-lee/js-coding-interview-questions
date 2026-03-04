/*
Given a two-dimensional array of integers,
return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], 
your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. 
*/

function flattenAndSort(array) {
    // flatten  : flat() method? forEach and create a new result 
    const result = [];
    array.forEach(el => {
        if (Array.isArray(el)) {
            el.forEach(item => {
                result.push(item);
            })
        }
        else {
            result.push(el)
        }
    }
    )
   return result.sort((a,b) => a - b)
}
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], 9, [7, 8]])) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// flat() methods with Infinity as argument to flatten all levels of nested arrays
// Infinity를 쓰는건 느릴 수 있다. option을 주거나 조건을 걸어주자.
// 디폴트 값을 지정
function flattenAndSortOptions(array, options={}) {
    // default를 무한으로 주고, 깊이를 알면 옵션 지정 가능하게함
    const {depth = Infinity, ascending = true} = options;
    const flatArray = array.flat(depth);
    const result = ascending ? flatArray.sort((a, b) => a-b) : flatArray.sort((a, b) => b-a)
    
    return result;
}

console.log(flattenAndSortOptions([[3, 2, 1], [4, 6, 5], [], 9, [7, 8]])) // [1, 2, 3, 4, 5, 6, 7, 8, 9] - default options
console.log(flattenAndSortOptions([[3, 2, [1,[0]]], [4, 6, 5], [], 9, [7, 8]], options={depth:3, ascending:true}), ) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSortOptions([[3, 2, 1], [4, 6, 5], [], 9, [7, 8]], options={depth:2, ascending:false})) // [9, 8, 7, 6, 5, 4, 3, 2, 1] - custom options
