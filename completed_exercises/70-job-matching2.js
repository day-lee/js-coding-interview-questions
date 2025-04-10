/*
Create a function match which takes a job, and filters a list of candidates to the ones that match the job.
We'll focus on two matching properties for this Kata: equity and location.

Equity
The candidate has an equity property (boolean) indicating if they desire equity,
 while the job will have a maximum equity property (float) representing the max
  amount of equity offered. If the maximum equity is zero, we can infer there is no equity offered.
   A job will match unless the candidate desires equity, but the job does not offer any.

Location
The candidate will have two location properties: current location and desired locations.
 A job can be located in multiple places as well which will be represented by its locations property.
  A match is when a job location is either in the candidate's current location or any of the candidate's
   desired locations.

*/

let job = {
  equityMax: 1.0,
  locations: ['New York', 'Kentucky']
}

let candidates = [{
  desiresEquity: true,
  currentLocation: 'New York',
  desiredLocations: ['San Francisco', 'Los Angeles', 'Colorado']
}, {
  desiresEquity: false,
  currentLocation: 'London',
  desiredLocations: ['Paris', 'Seoul', 'New York']
}]


//////////////////////////////////////////////////////////////////////////////////////////////////
function equityMatch(candidate, job){
  return !candidate.desiresEquity || job.equityMax > 0
}

function locationMatch(candidate, job){
  return job.locations.some((location) => (
    candidate.desiredLocations.includes(location) || candidate.currentLocation === location
  ))
}

function match(job, candidates) {
  return candidates.filter((candidate) =>(
    equityMatch(candidate,job) && locationMatch(candidate, job)
  ))
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/*
Logical operator

&& only TT -> T otherwise, F
|| only FF -> F otherwise, T

truthy, falsy
&& left trun return right

*/
function match(job, candidates) {

 function equityMatch(job, candidate) {
   return job.equityMax > 0 || !candidate.desiresEquity
 }

  // comparison between arrays and check inclusion. -> some() + includes()
 function locMatch(job, candidate) {
  const desiredLoc = job.locations.some(loc => candidate.desiredLocations.includes(loc))
   return job.locations.includes(candidate.currentLocation) || desiredLoc
 }

  let result = []

  for(let candidate of candidates) {
    if (equityMatch(job, candidate) && locMatch(job, candidate)) {
        result.push(candidate)
        }
  }

  return result
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function match2(job, candidates) {
  // true, j > 0,              true, j === 0  early return
  // false, j > 0, f,  j === 0

  // candidates.currentLocation in job.locations string in array
  // or candidate.desiredLocations in job.locations  array of arrays
  // return filtered candidates list
  let result = []
  let filteredByEquity = candidates
  if (job.equityMax === 0) {
     filteredByEquity = candidates.filter(person => person.desiresEquity === false)
  }

  for (let person of filteredByEquity) {
    if (job.locations.includes(person.currentLocation) || person.desiredLocations.some(loc => job.locations.includes(loc))){
     result.push(person)
   }
  }
return result

}

console.log(match(job, candidates))
console.log(match2(job, candidates))
