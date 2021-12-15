const isPrime = (num) => {
  if (num < 2) return false;
  for (let n of Array.from({ length: num }, (v, i) => i + 1)) {
    if (n < 2 || n === num) continue;
    if (num % n === 0) return false;
  }
  return true;
};

console.log(isPrime(2));
