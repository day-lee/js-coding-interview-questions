/*
Write a function named fetchNamesOfAllPublicRepos that receives one parameter

a string representing a GitHub username
The function should return a Promise that resolves with an array of strings representing the names of all the public repositories for the user with that username.

If the user does not exist, the returned Promise should resolve to an empty Array.

PS: here's the link to the GitHub API: https://docs.github.com/en/rest. It's your job to find the correct endpoint to call.
-----------------------------------------------------------------

1. should return a Promise that resolves with an array of strings representing
the names of all the public repositories for the user

2. If the user does not exist, the returned Promise should resolve to an empty Array.
*/


async function fetchNamesOfAllPublicRepos(username) {
    const repoNames = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
                          // .json() returns a "Promise" with fulfilled status and deserialised js object
                          .then(response => response.json())
   return Array.isArray(repoNames) ? repoNames.map(repo => repo.name) : [];
}

const test1 = await fetchNamesOfAllPublicRepos('iampava')
console.log(test1)
const test2 = fetchNamesOfAllPublicRepos('day-lee')
test2.then(v => console.log(v, v.length))

