// create a canIRetire function that will receive 3 parameters: age, gender and years of contribution and will return true or false.
// keep in mind that the minimum age for women to retire is 60 years and men 65 years. in both cases you have to have at least 30 years of contribution.

const canIRetire = (age, gender, years) => {
  if (gender == "female" && age >= 60 && years >= 30) {
    return true;
  }

  if (gender == "male" && age >= 65 && years >= 30) {
    return true;
  }
  return false;
};

console.log(canIRetire(70, "male", 40));
console.log(canIRetire(45, "male", 40));
console.log(canIRetire(70, "female", 40));
