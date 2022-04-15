// create a function percentage that will receive an array of numbers and return another with 3 numbers: index 0 will be the percentage of positive numbers, index 1 will be the percentage of numbers that are zero and index 2 the percentage of negative numbers.
// i.e: percentage([1, 2, 0, -1]) should return [0.5, 0.25, 0.25], as there are 50% of positive numbers, 25% zeros, and 25% negative numbers.

function percentage(numbers) {
  let length = numbers.length;
  let positive = 0;
  let zero = 0;
  let negative = 0;

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > 0) positive++;
    if (numbers[index] === 0) zero++;
    if (numbers[index] < 0) negative++;
  }

  return [positive / length, zero / length, negative / length];
}

console.log(percentage([1, 2, 0, -1]));
console.log(percentage([56, -45, 0, 0]));
console.log(percentage([4, -1, -4, -9]));
