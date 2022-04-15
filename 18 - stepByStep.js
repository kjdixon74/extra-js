// create a function stepByStep that will receive a number as argument and print the numbers starting from 0.
// i.e: stepByStep(5)
// "012345"

const stepByStep = (num) => {
  // store the value to be returned
  let steps = "";
  // create a for loop to count
  for (let step = 0; step <= num; step++) {
    // take the current number we are counting
    steps += step;
  }
  // return final string
  return steps;
};

console.log(stepByStep(5));
console.log(stepByStep(15));
console.log(stepByStep(3));
