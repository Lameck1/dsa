function reverse(arrayOfChars) {
  // Reverse the input array of characters in place
  // O(n) time
  // O(1) space
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;
  while (leftIndex < rightIndex) {
    [arrayOfChars[leftIndex], arrayOfChars[rightIndex]] = [
      arrayOfChars[rightIndex],
      arrayOfChars[leftIndex],
    ];
    leftIndex++;
    rightIndex--;
  }
  return arrayOfChars;
}

console.log(reverse(['a', 'b', 'c', 'd', 'e', 'f']));
