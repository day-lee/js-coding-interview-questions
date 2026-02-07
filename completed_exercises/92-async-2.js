/*
    1. Create a function called "fetchFast" that returns 
       a Promise that resolves with the String "Fast Done!"
       after 2 seconds
    2. Create a function called "fetchSlow" that returns 
       a Promise that resolves with the String "Slow Done"
       after 6 seconds 
    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchFast" then log out
       the data. Then use await to wait for the data to come
       back from "fetchSlow" and log it out right after.

    5. Call the async function you created
    6. Log out "Program complete!"

    7. How long does this take and why? - 8 seconds, 
    first promise resolves in 2 sec, then next one starts and resolve in 6 sec 
    8. How could you speed it up?
     1) start both promise and process later together 
     2) Promise.all()   

*/

const fetchFast = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve('Fast Done!');
        }, 2000)
    })
}

const fetchSlow = () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            resolve('Slow Done')
       }, 6000)   
    })
}

console.log('Program starting...');
const firstTimestamp = new Date();

const useFetch = async () => {
//    const fastResult = await fetchFast();
//    console.log(fastResult);
//  //  console.log(fastResult.then((v) => { console.log(v)}));
  
//    const slowResult = await fetchSlow();
//    console.log(slowResult);

//     const secondTimestamp = new Date()
//    console.log(secondTimestamp - firstTimestamp)

// 1) speed up to 6 sec, bottle neck is slowest one.
const fTime = new Date()
// const [fastResult, slowResult] = await Promise.all([fetchFast(), fetchSlow()]);
// console.log(fastResult);
// console.log(slowResult);

// 2) speed up. register both without await 
const f = fetchFast()
const s = fetchSlow()
console.log(await f)
console.log(await s)
console.log(new Date() - fTime) 
}

useFetch();

console.log('Program Complete')