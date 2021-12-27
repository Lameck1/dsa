const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let tempValue = arr[i];
    let position = i - 1;
    while (position >= 0 && arr[position] > tempValue) {
      arr[position + 1] = arr[position];
      position--;
    }
    arr[position + 1] = tempValue;
  }
  return arr;
};

console.log(
  insertionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ]),
);
