// create a function checkDataType that will receive an array and iterate over the array and log to the console its index and the data type.

const dataTypes = [2000, "Hi", true];

const checkDataType = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(i, typeof array[i]);
  }
};
checkDataType(dataTypes);
