/*
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

*/

function likes(names) {
const len = names.length;
// use rest to assign first three names to variables and remaining to others from names array
const [a, b, c, ...others] = names; 

// use default to handle other cases rather than length of 0 to 3
switch (len) {
    case (0):
        return 'no one likes this' 
    case (1):
        return `${a} likes this`
    case (2):
        return `${a} and ${b} like this`
    case (3):
        return `${a}, ${b} and ${c} like this`
    default:
        return `${a}, ${b} and ${others.length + 1} others like this`
}
}


console.log(likes([]))// 'no one likes this');
console.log(likes(['Peter']))// 'Peter likes this');
console.log(likes(['Jacob', 'Alex']))// 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark'])) //'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) //'Alex, Jacob and 2 others like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Naomi'])) //'Alex, Jacob and 3 others like this');

