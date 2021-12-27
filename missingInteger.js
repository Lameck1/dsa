const missingInteger = (A) => {
  //   const sorted = [...new Set(A)].sort((a, b) => a - b);
  //   if (sorted[0] > 1 || sorted[sorted.length - 1] < 1) return 1;
  //   for (let i = 0; i < sorted.length; i++) {
  //     if (sorted[i] === i + 1) continue;
  //     if (sorted[i] !== i + 1) {
  //       return i + 1;
  //     }
  //   }
  //   return sorted.length + 1;
  const set = new Set(A);
  let result = 1;

  while (true) {
    if (set.has(result)) {
      result++;
    } else {
      break;
    }
  }

  return result;
};

console.log(missingInteger([1, 3, 6, 4, 1, 2]));
