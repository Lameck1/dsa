const bubbleSort = (arr) => {
  let swapped;
  let unsortedUntilIndex = arr.length - 1;

  while (!swapped) {
    swapped = true;
    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = false;
      }
    }
    unsortedUntilIndex--;
  }
  return arr;
};

console.log(
  bubbleSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ]),
);
