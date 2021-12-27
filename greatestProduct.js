// It finds the greatest product of any pair of two numbers within a given array

// Quadratic time: O(n^2)
const greatestProduct = (arr) => {
  let maxProduct = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let product = arr[i] * arr[j];
      console.log(`${arr[i]} * ${arr[j]}`);
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  return maxProduct;
};

// Linear time: O(n)
// const greatestProduct = (arr) => {
//   let sortedArr = arr.sort((a, b) => a - b);
//   let maxProduct = 0;
//   for (let i = 0; i < sortedArr.length - 1; i++) {
//     console.log(`${sortedArr[i]} * ${sortedArr[i + 1]}`);
//     let product = sortedArr[i] * sortedArr[i + 1];
//     if (product > maxProduct) {
//       maxProduct = product;
//     }
//   }

//   return maxProduct;
// };

console.log(greatestProduct([4, 2, 3, 1]));
