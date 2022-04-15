// create a function oddOrEven that will receive an array and check if the length of the array is an odd or even number, and return the result.
const lettersArray = ["a", "b", "c", "d", "e", "f", "g"];

function oddOrEven(letters) {
  let result;

  if (letters.length % 2 === 0) {
    result = "even";
  } else {
    result = "odd";
  }

  return `The length of the array is an ${result} number`;
}

console.log(oddOrEven(lettersArray));
console.log(oddOrEven(["k", "d"]));
