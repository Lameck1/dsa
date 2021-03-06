// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

//   const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

const mergeArrays = (myArray, alicesArray) => {
  let mergedArray = [];
  let currentMyArrayIndex = 0;
  let currentAlicesArrayIndex = 0;

  while (
    currentMyArrayIndex < myArray.length &&
    currentAlicesArrayIndex < alicesArray.length
  ) {
    if (myArray[currentMyArrayIndex] < alicesArray[currentAlicesArrayIndex]) {
      mergedArray.push(myArray[currentMyArrayIndex]);
      currentMyArrayIndex++;
    } else {
      mergedArray.push(alicesArray[currentAlicesArrayIndex]);
      currentAlicesArrayIndex++;
    }
  }

  return mergedArray
    .concat(myArray.slice(currentMyArrayIndex))
    .concat(alicesArray.slice(currentAlicesArrayIndex));
};

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
