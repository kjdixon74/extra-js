// create a function luckyNumber that will receive a number as a parameter and return if it is a lucky number or not. A lucky number must match these conditions:
// it is positive
// it is a multiple of 2 or 3
// it is not 15

const luckyNumber = (num) => {
  let luck;
  if (num > 0 && num !== 15) {
    if (num % 2 === 0 || num % 3 === 0) {
      luck = "is";
    }
  } else {
    luck = "is not";
  }
  return `It ${luck} a lucky number`;
};

console.log(luckyNumber(15));
console.log(luckyNumber(4));
console.log(luckyNumber(9));
