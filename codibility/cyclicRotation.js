// const cyclicRotation = (A, K) => {
//   for (let i = 0; i < K; i++) {
//     let last = A.pop();
//     A.unshift(last);
//   }
//   return A;
// };

function cyclicRotation(A, K) {
  const newArr = [];
  for (let i = 0; i < A.length; i++) {
    newArr[(i + K) % A.length] = A[i];
  }

  return newArr;
}

console.log(cyclicRotation([3, 8, 9, 7, 6], 3));
