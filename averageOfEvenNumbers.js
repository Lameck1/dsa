const averageOfEvenNumbers = (array) => {
  let evenNumbers = array.filter((number) => number % 2 === 0);
  let sum = evenNumbers.reduce((acc, number) => acc + number, 0);
  return sum / evenNumbers.length;
};

console.log(averageOfEvenNumbers([1, 3, 5, 2, 4, 6]));
