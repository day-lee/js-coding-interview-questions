/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    * 6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/

/*
Wrong Example of Sequential Execution of Promises

Promise 생성 시점에 작업은 이미 시작되고,
.then()은 resolve되어 결과를 받을 때 실행될 일을 예약하는 단계예요.

Both promise3 and promise4 are created right away, and executor callbacks run immediately
and each of their setTimeout(..., 3000) calls start at the same time.
After 3 seconds → both promises are almost completed simultaneously.

The Promise executor (the callback that receives resolve and reject) runs immediately when the Promise is created — it isn’t buffered or delayed.
In contrast, .then() simply “schedules what to do after that promise finishes.”
*/

console.log('Program started')
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // call resolve after 3 seconds
        resolve('Step 1 complete') 
    }, 3000)
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Step 2 Complete')
    } , 3000)
})

console.log("3",promise3)
console.log('Program in progress...')

promise.then(async(v1) => {
    console.log(v1)
    // * with return keyword return another promise
    return promise4
}).then((v2) => {console.log(v2)})
/*
At that moment, promise4 is already fulfilled when it was created,
so the code right after .then(...) executes immediately. -> then() methods just schedule the next steps to be executed after the promise is fulfilled.
→ As a result, the entire process only takes about 3 seconds.
*/


//----------------------------------
/*
It executes in order because the second promise is created after the first one finishes(inside the .then(), returning a newly created promise).
*/
console.log('Program started')
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //This part is the function that runs immediately when the Promise is created.
        resolve('Step 1 complete') 
    }, 3000)
})

console.log("1",promise)
console.log('Program in progress...')

promise.then(async(v1) => {
    console.log(v1)
    // * with return keyword return another promise
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Step 2 Complete')
    } , 3000)
})
}).then((v2) => {console.log(v2)})


//------------------------------

/*
To run Promises sequentially:
You should create a new Promise inside a .then() callback.
→ This way, the next asynchronous operation starts "only after" the previous one finishes.

To run Promises in parallel:
Create all the Promises in advance, and use something like Promise.all([...]) to handle them together.
*/