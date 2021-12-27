const frogRiverOne = (X, A) => {
  const visited = new Set();
  for (let i = 0; i < A.length; i++) {
    visited.add(A[i]);
    if (visited.size === X) return i;
  }
  return -1;
};

console.log(frogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4]));
