const binarySearch = (arr, target) => {
  let lowerBound = 0;
  let upperBound = arr.length - 1;
  while (lowerBound <= upperBound) {
    midPoint = Math.floor((lowerBound + upperBound) / 2);
    valueAtMidPoint = arr[midPoint];
    if (valueAtMidPoint === target) {
      return midPoint;
    } else if (valueAtMidPoint > target) {
      upperBound = midPoint - 1;
    } else {
      lowerBound = midPoint + 1;
    }
  }
  return -1;
};
console.log(binarySearch([1, 2, 3, 4, 5], 3));
