/*
Write a function named fetchGitHubName that receives 1 parameter

a string representing a GitHub username
The function should return a Promise that resolves to the full name of the GitHub user with this username. If the user does not exist, the Promise should resolve to null.

PS: here's the link to the GitHub API: https://docs.github.com/en/rest/users. It's your job to find the correct endpoint to call.
https://www.100jsfunctions.com/exercises/fetchGitHubName
*/
// fetch returns a promise
const fetchGitHubUserName = async (username) => {
    const fullName = await fetch(`https://api.github.com/users/${username}`)
                     .then(res => res.json())   
                     .then(result => result.name ); 
    return fullName ? fullName : null
}

console.log(fetchGitHubUserName('day-lee').then((value)=> console.log(value)))
console.log(fetchGitHubUserName('day-leelefjieal').then((value)=> console.log(value)))

