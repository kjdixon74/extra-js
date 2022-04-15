// create the function isItPositive that will receive a number as argument and return:
// 1 if the number is positive, 0 if the number received is zero and -1 if the number received is negative

const isItPositive = (num) => {
  return Math.sign(num);
};

console.log(isItPositive(-1233256465132));
console.log(isItPositive(0));
console.log(isItPositive(1233256465132));
