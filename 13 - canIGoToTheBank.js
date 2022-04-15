// create a canIGoToTheBank function that will receive 2 parameters: the day of the week and the time. The function must return true only if the bank is still open.
// keep in mind that the bank is open from Monday through Friday and from 10:00 until 18:00

const canIGoToTheBank = (day, time) => {
  if (day == "Saturday" || day == "Sunday") {
    return false;
  }

  if (time < 10 || time > 18) {
    return false;
  }

  return true;
};

console.log(canIGoToTheBank("Sunday", 10));
console.log(canIGoToTheBank("Monday", 10));
console.log(canIGoToTheBank("Thursday", 19));
