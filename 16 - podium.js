// create the function podium that will receive a parameter with the podium position and return a different string according to the position:
// first place: 'gold'
// second place: 'silver'
// third place: 'bronze'
// other places: 'keep trying!

const podium = (position) => {
  let output;
  switch (position) {
    case 1:
      output = "gold";
      break;
    case 2:
      output = "silver";
      break;
    case 3:
      output = "bronze";
      break;
    default:
      output = "keep trying!";
  }
  return output;
};

console.log(podium(3));
console.log(podium(1));
console.log(podium(2));
console.log(podium(4));
