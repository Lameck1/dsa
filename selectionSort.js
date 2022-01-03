const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    if (lowestNumberIndex !== i) {
      [array[i], array[lowestNumberIndex]] = [
        array[lowestNumberIndex],
        array[i],
      ];
    }
  }
  return array;
};

console.log(selectionSort([1, 3, 5, 2, 4, 6]));
