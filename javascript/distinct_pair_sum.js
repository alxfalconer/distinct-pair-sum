function distinctPairSum(arr, k) {
  const newObj = {};

  if (arr.length < 2) {
    return [];
  }

  for (i = 0; i < arr.length; i++) {
    let current = arr[i]
    let next = arr[i+1]

    if (current + next === k) {
      newObj[current] = [current, next]
      i++
    }

  }
  
  return Object.values(newObj);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
