const tapeEquilibrium = (A) => {
  let rightSum = A.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  let diffs = [];
  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];
    minDiff[i] = Math.abs(leftSum - rightSum);
  }
  return diffs.reduce((a, b) => (a < b ? a : b));
};
