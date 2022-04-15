// create an array colorsArray that is the result of the combination of colorsArray1 and colorsArray2, but don't include repeated values.

const colorsArray1 = ["yellow", "red", "blue", "orange"];
const colorsArray2 = ["blue", "green", "white", "yellow"];

const mergedArr = colorsArray1.concat(colorsArray2);
const uniqueValues = new Set(mergedArr);
const colorsArray = [...uniqueValues];
console.log(colorsArray);
