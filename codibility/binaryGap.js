const binaryGap = (N) => {
  let binary = N.toString(2);
  let count = 0;
  let max = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      if (count > max) {
        max = count;
      }
      count = 0;
    } else {
      count++;
    }
  }
  return max;
};
console.log(binaryGap(1041));
