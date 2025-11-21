/*
The set is considered valid if, and only if,
every property of the card is either the same as the other two cards, or distinct from the other two.
*/


function isValidSet(quantities, shapes, colours, patterns) {
  // ALL diff: every property(each array) is distinct -> all evaludate as length 3 after converting them to set -> true
  // ALL same: evaluates length 1 after converting to set -> true
  //otherwise, false
  const [q, s, c, p] = [new Set(quantities), new Set(shapes), new Set(colours), new Set(patterns)]
//   console.log(q,s,c,p)

  if (q.size === 3 && s.size === 3 && c.size === 3 && p.size === 3) {
      return true
  } else if  (q.size === 1 && s.size === 1 && c.size === 1 && p.size === 1) {
      return true
  } else return false
}
console.log(isValidSet([1,2,3], ["diamond","snake","capsule"], ["green","blue","red"], ["blank","striped","solid"])) // t
console.log(isValidSet([1,2,3], ["diamond","snake","capsule"], ["green","blue","red"], ["blank","striped","solid"]))
console.log(isValidSet([2,2,2], ["diamond","diamond","diamond"], ["green","green","green"], ["blank","blank","blank"]))
console.log(isValidSet([1,1,2], ["snake","diamond","diamond"], ["green","red","green"], ["blank","blank","blank"]))
console.log(isValidSet([1,1,3], ["diamond","snake","capsule"], ["green","blue","red"], ["blank","striped","solid"]))// f