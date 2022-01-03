const twoNumberProducts = (arr) => {
  let products = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      products.push(arr[i] * arr[j]);
    }
  }
  return products;
};

console.log(twoNumberProducts([1, 5, 3, 4, 2]));
