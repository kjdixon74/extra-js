// create a function multiply, that will receive an array of numbers as argument and return the multiplication of all numbers.
// i.e: multiply([1, 4, 7]) should return 28, which is 1 * 4 * 7

function multiply(numbers) {
  const product = numbers.reduce((acc, number) => (acc *= number), 1);
  return product;
}

console.log(multiply([1, 4, 7]));
console.log(multiply([1, 3, 7]));
console.log(multiply([2, 2, 9]));
