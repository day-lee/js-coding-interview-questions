/*
    1. Create the following Object and assign it to a variable
       named "pet":
       { name: "Nemo", type: "fish", age: 2 }

    2. Add a 'sayHello' function to the Object prototype. When
       called, it should log out the Object's name,
       type and age to match the following example:
       "Nemo is a fish and is 2 years old. Nemo says hi!"

       ^ This would be logged if we did pet.sayHello();

    3. Create another pet with different property values
       to make sure it works as well.
*/

const pet = {
    name: "Nemo",
    type: 'fish',
    age: 2
}

Object.prototype.sayHello = function(){
    console.log(this)
    console.log(`${this.name} is a ${this.type} and is ${this.age} years old. Hiii`)
}

// pet.sayHello()

// this is bound to the object
const pet2 = {
    name: "Misty",
    type: 'cat',
    age: 12
}
// pet2.sayHello()



/*
    1. Create the following Object and assign it to a variable
       named "book":
       {
        name: "Harry Potter",
        author: "J.K. Rowling",
        characters: {
            mainChars: ["Harry", "Ron", "Hermione"],
            list: function() {
                for (const char of this.mainChars) {
                    console.log(char)
                }
            }
        }
       }

    2. Call the list function on the book and explain the behaviour

    3. How would you make the "list" method temporarily (for one
       function call) log out this array instead:
       ["Draco", "Severus", "Voldemort"] ?

    HINT* What methods can we use on Functions to manipulate "this"?
*/



const book = {
        name: "Harry Potter",
        author: "J.K. Rowling",
        characters: {
            mainChars: ["Harry", "Ron", "Hermione"],
            list: function() {
                for (const char of this.mainChars) {
                    console.log(char)
                }
            }
        }
       }

// book.characters.list()
// 2. in the book object, when we call list method,
// the closest parent to the list method is the nested characters object
// so when we call it, it will loop through characters and print it. 
// left side of the dot is characters

/*
3. to temporarily log out the different array, 
we need to use call or apply 
similar but i will use apply as it gets on array as a second parameter

*/

// book 만 하니까 TypeError: this.mainChars is not iterable 
// book.characters 로 object를 정확히 지정해줘야 
// context, universe is book.characters 
//첫번째 인자로 전달된 객체를 바인딩 
book.characters.list.call({mainChars:["Draco", "Severus", "Voldemort"]})

