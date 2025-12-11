/*
Write a function named fetchGitHubName that receives 1 parameter

a string representing a GitHub username
The function should return a Promise that resolves to the full name of the GitHub user with this username. If the user does not exist, the Promise should resolve to null.

PS: here's the link to the GitHub API: https://docs.github.com/en/rest/users. It's your job to find the correct endpoint to call.
https://www.100jsfunctions.com/exercises/fetchGitHubName
*/
// fetch returns a promise
async function fetchGitHubUserName(username){
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)        
        if(response.ok) {
            const user = await response.json();
        return user.name;
    }                 
    return null;
    }
    catch(error) {
        console.error('Error fetching github username: ', error)
        return null;
    }
    
}

fetchGitHubUserName('day-lee').then(name => console.log(name)) 
fetchGitHubUserName('day-leelefjieal').then(name => console.log(name)) // null

