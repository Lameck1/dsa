const binarySearch = (arr, target) => {
  let mid = Math.floor(arr.length / 2);
  return mid === target
    ? mid
    : arr[mid] > target
    ? binarySearch(arr.slice(0, mid), target)
    : binarySearch(arr.slice(mid + 1), target);
};
console.log(binarySearch([1, 2, 3, 4, 5], 3));
