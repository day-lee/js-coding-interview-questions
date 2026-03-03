/*
"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3 abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d 33 2f 2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string
숫자 * (a), 숫자 * (b)
숫자 * (abc)
숫자 * (a), 숫자, 숫자, 숫자 * (b)

문자와 숫자를 구별해야함 어떻게? Number.isNaN(숫자, 문자)?  
문자가 구분자 역할
 
*/

function stringExpansion(s) {

    // variables: result = '', num, hasNum, 
    let result = '';
    let num  = 1;
    let hasNum = false;
    // for loop of array to check 
    for (let i of s) {
    // if Number.isNaN(el), add to result 
        if (isNaN(Number(i))) {
            //result += i.repeat(num)
            for (let j = 1; j <= num; j++) {
                result += i;
            }
        } else {
            num = Number(i);
            hasNum = true;
        }
    // else assign to num and hasNum to true 
    }
    // Edge case: check hasNum is false means no number was present in s
    if (!hasNum) return s
    // otherwise return result
    return result;
}

console.log(stringExpansion('3D2a5d2f')); // 'DDDaadddddff'
console.log(stringExpansion('3abc')) //"aaabbbccc" 
console.log(stringExpansion('abcde')) // "abcde"
console.log(stringExpansion('a2bcde')) // "abbccddee"
console.log(stringExpansion('0d0a0v0t0y')) //  ''
console.log("----------------------------")


function stringExpansion2(str) {
  let num = 1;

    return str.split('').map(item => {
        if (!isNaN(item)) {
            // number 
            num = Number(item)
            return ''
        } else {
            //string 
           return item.repeat(num)
        }
    }).join('')

}

console.log(stringExpansion2('3D2a5d2f')); // 'DDDaadddddff'
console.log(stringExpansion2('3abc')) //"aaabbbccc" 
console.log(stringExpansion2('abcde')) // "abcde"
console.log(stringExpansion2('a2bcde')) // "abbccddee"
console.log(stringExpansion2('0d0a0v0t0y')) //  ''
console.log("----------------------------")


// map과 return 사용할 수 있음. 중괄호랑 명시적으로 사용해야함 
function stringExpansion3(str) { 
    // variable to store number 
    let num = 1;
    // turn str into arr and use map to iterate each element 
    return str.split('').map(item => {
    // if el is string isNaN(el) -> string, repeat
    // return  repeated str
    let newValue = Number(item)
    if (isNaN(newValue)) {
        return item.repeat(num)
    }
    // else is number, store it in variable
    // return empty string '' else {
      else {  
        num = newValue
        return ''
    }
    //join the array into string 
    }).join('')
}

console.log(stringExpansion3('3D2a5d2f')); // 'DDDaadddddff'
console.log(stringExpansion3('3abc')) //"aaabbbccc" 
console.log(stringExpansion3('abcde')) // "abcde"
console.log(stringExpansion3('a2bcde')) // "abbccddee"
console.log(stringExpansion3('0d0a0v0t0y')) //  ''