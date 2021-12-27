const permCheck = (A) => {
  let set = [...new Set(A)];
  if (A.length !== set.length) return 0;
  let expetedSum = (A.length * (A.length + 1)) / 2;
  let sum = A.reduce((acc, curr) => acc + curr);
  return expetedSum === sum ? 1 : 0;
};

console.log(permCheck([4, 1, 2, 3]));
