
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // Base Case
  if(toN === fromN) {
    return fromN;
  }
  // Recursive Case
  return toN + sum(fromN, toN - 1)
}

module.exports = sum;
