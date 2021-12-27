const oddOccurencesInArray = (A) => {
  let hash = {};
  for (let i = 0; i < A.length; i++) {
    if (hash[A[i]]) {
      hash[A[i]]++;
    } else {
      hash[A[i]] = 1;
    }
  }
  for (let key in hash) {
    if (hash[key] % 2 !== 0) {
      return Number(key);
    }
  }
};

console.log(oddOccurencesInArray([9, 3, 9, 3, 9, 7, 9]));
