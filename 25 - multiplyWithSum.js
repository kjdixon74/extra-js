// create a function multiplyWithSum that will multiply between 2 numbers using only the addition operation.

const multiplyWithSum = (num1, num2) => {
  let sum = 0;
  for (let counter = 0; counter < num1; counter++) {
    sum += num2;
  }
  return sum;
};
console.log(multiplyWithSum(2, 10));
console.log(multiplyWithSum(7, 6));
console.log(multiplyWithSum(8, 2));

// 3 * 3
// 0 + 3 = 3
// 3 + 3 = 6
// 6 + 3 = 9

// 4 * 2
// 0 + 2 = 2
// 2 + 2 = 4
// 4 + 2 = 6
// 6 + 2 = 0
