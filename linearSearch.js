const linearSearch = (arr, target) => {
  let steps = 0;
  if (arr[arr.length - 1] === target) return [arr.length - 1, 1];
  for (let value of arr) {
    steps++;
    if (value > target || arr[arr.length - 1] < target) {
      break;
    } else if (value === target) {
      return [arr.indexOf(value), steps];
    }
  }

  return [-1, steps];
};

console.log(linearSearch([1, 2, 3, 4, 5], 0));
console.log(linearSearch([1, 2, 3, 4, 5], 10));
console.log(linearSearch([1, 2, 3, 4, 5], 1));
console.log(linearSearch([1, 2, 3, 4, 5], 5));
