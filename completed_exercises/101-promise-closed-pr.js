/*
Write a function named fetchClosedPullRequests that receives 2 parameters:

the username of a GitHub user
the name of a public repository owned by the user above - repo

The function should return a Promise that resolves to an Array with the IDs of all closed Pull Requests from that repo.

If the username or repo does not exist, the returned Promise should resolve to an empty Array.

PS: here's the link to the GitHub API: https://docs.github.com/en/rest. It's your job to find the correct endpoint to call.

  https://api.github.com/repos/frontend-ro/frontend.ro/pulls?state=closed

*/

async function fetchClosedPullRequests(username, repo) {
    const promise = await fetch(`https://api.github.com/repos/${username}/${repo}/pulls?state=closed&per_page=100`)
                    .then(response => response.json())
    return Array.isArray(promise) ? promise.map(pr => pr.id) : []
    }

const username = "frontend-ro"
const repo = "frontend.ro"

const test1 = await fetchClosedPullRequests(username, repo).then(v => console.log(v, v.length))