// create a function sum, that will receive a number as a parameter and return the sum of the numbers previous to it.
// i.e: sum(4)
// 6
// which is 0 + 1 + 2 + 3

const sum = (num) => {
  let sum = 0;

  for (let counter = 0; counter < num; counter++) {
    sum += counter;
  }

  return sum;
};

console.log(sum(4));
console.log(sum(10));
