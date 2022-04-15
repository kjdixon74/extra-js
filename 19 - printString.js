// create a function printString that will receive 2 parameters: a number and a string.
// return the string the number of times that you received as parameter.
// i.e: printString(3, 'blue')
// 'blueblueblue'

const printString = (num, str) => {
  return str.repeat(num);
};

console.log(printString(3, "blue"));
