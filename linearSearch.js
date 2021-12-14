const linearSearch = (arr, target) => {
  for (let value of arr) {
    if (value === target) {
      return arr.indexOf(value);
    }
  }
  return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5], 3));
