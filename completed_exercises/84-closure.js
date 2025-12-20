
function outerFunction(n) {
    let count = n;
   console.log(`outer:${count}`) 

    function innerFunction() {
        console.log(`inner:${count}`)
        return count ++;
    }
   console.log(`outer:${count}`) 
     return innerFunction;
}

const counter = outerFunction(10);

console.log(counter()); // 출력: 10
console.log(counter()); // 11 // count 변수의 초기값이 10으로 세팅된 상태에서 시작하나봄 
console.log(counter()) // 12 ...


let instructorModule1 = (function createInstructors(){
    let instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instructor)
            return instructors;
        }
    }
})();

let instructorModule2 = (function createInstructors(){
    let instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instructor)
            return instructors;
        }
    }
})();

console.log(instructorModule2.showInstructors()); // ["Elie", "Matt", "Tim"]
console.log(instructorModule2.addInstructor('Hi')); // ["Elie", "Matt", "Tim"]
console.log(instructorModule2.showInstructors()); // ["Elie", "Matt", "Tim"]


const myObject = (function(){
	let privateValue = 0;
	
	return {
		increment: function(arg){
			return privateValue += typeof arg === 'number' ? arg : 5
		},
		getValue: function(){
			return privateValue
		}
	}}
())

myObject.increment(2)
console.log(myObject.getValue()) // 2

myObject.increment('a')
console.log(myObject.getValue()) // 3

/*
Write a function called createCounter. This function should contain a variable count that is initialized to 0.
This function should return another function that when invoked, 
increments the counter by 1 and returns the count variable. You should be able to create multiple counters
 with the createCounter function and they should all have their own private variable called count.
let firstCounter = createCounter();

firstCounter(); // 1
firstCounter(); // 2
firstCounter(); // 3
firstCounter(); // 4

let secondCounter = createCounter();

secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

firstCounter(); // 5
firstCounter(); // 6

secondCounter(); // 4
*/




//1
// function createCounter(){
//     let count = 0;
    
//     function increment(){
//         ++count;
//         return count
//     }
//     return {increment};
// }
// console.log("----- createCounter test -----")
// const firstCounter = createCounter();
// console.log(firstCounter.increment()); //1
// console.log(firstCounter.increment()); //2
// console.log(firstCounter.increment()); //3
// console.log(firstCounter.increment()); //4
// const secondCounter = createCounter();
// console.log(secondCounter.increment()) //1
// console.log(secondCounter.increment()) // 2

// 2
function createCounter(){
    let count = 0;
    
    function increment(){
        ++count;
        return count
    }
    return increment;
}
console.log("----- createCounter test -----")
const firstCounter = createCounter();
console.log(firstCounter()); //1
console.log(firstCounter()); //2
console.log(firstCounter()); //3
console.log(firstCounter()); //4
const secondCounter = createCounter();
console.log(secondCounter()) //1
console.log(secondCounter()) // 2

// { } 안에 넣는 순간 “객체 리터럴”이 되는 것
// return { increment }
// → 객체를 반환함
// → 그래서 객체 안의 increment 메서드를 호출해야 해서
// firstCounter.increment() 형태가 됨

// return increment
// → 함수 그 자체를 반환함
// → 변수 firstCounter가 함수가 되므로
// firstCounter() 형태로 바로 호출함

// 정리:
// 객체를 반환하면 객체.속성()
// 함수를 반환하면 함수()
// 이 차이뿐이다.