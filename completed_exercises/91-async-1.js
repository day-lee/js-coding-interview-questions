/*
    1. Create a function called "fetchPokemon" that returns 
       a Promise that resolves with the value :
       { data: {name: "Pickachu", power: 20} } after 2 seconds
    2. Print out "Program starting..."
    
    3. Create an async function that uses await to wait for
       the data to comes back from "fetchPokemon" then log out
       the data

    4. Call the async function you created
    5. Log out "Program complete!"

    After your're done the above ^:
    6. Change "fetchPokemon" to reject after 2 seconds instead
       with a new Error Object with the message "Danger, danger!"
    7. How can you modify your async function to catch this error?
*/

// promise function 
const fetchPokemon = () => {
    const result = new Promise((resolve, reject) => {
        setTimeout(()=>{
             //resolve({data: {name: 'pickachu', power: 20}})
             reject(new Error('Danger, danger!'))
        }, 2000)
    })
    return result
}

//console.log('Program starting...')

// async function 
const asyncPokemon = async () => {
    try {
        const result = await fetchPokemon();
        console.log(result.data)
    } catch (error) {
        console.error(error)
    }
}
//asyncPokemon();
//console.log('Program completed!')



/*
    1. Create a function called "fetchUser" that returns 
       a Promise that resolves with the value :
       { data: {user: "Monkey", admin: true} } after 3 seconds
    2. Create a function called "login" that takes an Object
       as an argument. If the object has a property called 
       "admin" with a value of true, then log out
       "Successfully logged in!", otherwise log out
       "Failed to log in, please try again."

    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchUser".
    
    5. Pass the user that comes back from "fetchUser" to the
       "login" function you created above

    6. Call the async function you created
    7. Log out "Program complete!"
*/
// http request
const fetchUser = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
             resolve({ data: {user: "Monkey", admin: true} } );
            // reject(new Error('Not authenticated'))
        }, 3000);
    })
}

const login = (arg) => {
    if (arg.hasOwnProperty('admin') && arg.admin === true) {
        console.log('Successfully logged in!'
        )
    } else {
        console.log('failed to log in, please try again.')
    }
}

console.log('program starting...');

const useFetchUser = async () => {
    try {
        console.log('loading...')
        const user = await fetchUser();
        login(user.data);
    } 
    catch (error) {
        console.error(error);
    }
}

useFetchUser();

console.log('Program complete!')