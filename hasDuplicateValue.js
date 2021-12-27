// Linear Solution: O(n)
// const hasDuplicateValue = (arr) => {
//   let steps = 0; // count of steps
//   const seen = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     steps++; // increment number of steps
//     if (seen.has(arr[i])) {
//       return true;
//     }
//     seen.add(arr[i]);
//   }
//   console.log(`steps: ${steps}`);
//   return false;
// };

// Liner Solution: O(n)
function hasDuplicateValue(array) {
  let steps = 0;
  let existingNumbers = [];
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (existingNumbers[array[i]] === 1) {
      return true;
    } else {
      existingNumbers[array[i]] = 1;
    }
  }
  console.log(steps);
  return false;
}

// Quadratic Solution: O(n^2)
// function hasDuplicateValue(array) {
//   let steps = 0; // count of steps
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       steps++; // increment number of steps
//       if (i !== j && array[i] === array[j]) {
//         return true;
//       }
//     }
//   }
//   console.log(steps); // print number of steps if no duplicates
//   return false;
// }
console.log(hasDuplicateValue([1, 2, 3, 4, 5]));
