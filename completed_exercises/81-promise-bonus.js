/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds

    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?

    HINT: Use Google/Documentation to help find an answer
    HINT2: You can Google for something like:
           "resolve 2 promises at the same time javascript"
*/

// const promise1 = new Promise((resolve) => {
//     // as soon as the promise is created, the executor callback runs, setting the timer
//     setTimeout(() => {
//         resolve(10)
//     }, 3000)
// })
// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(20)
//     }, 5000)
// }) 
// console.log("Two pending promises: ", "1", promise1, "|", "2", promise2)
// promise1.then(value1 => {
//     console.log("p1 should be resolved with value 10: ", promise1, "|", "p2 should be pending: ", promise2 )
//     promise2.then((value2) => {
//         console.log('p2 should be resolved with value 20: ', promise2)
//         console.log('p1+p2=', value1 + value2)})})


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 3000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 5000)
})

Promise.all([promise1, promise2]).then(value => {
    const [a, b] = value
    console.log(a+b)
})