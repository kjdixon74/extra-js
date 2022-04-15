// Loop over the following arrays, and console.log() the item both arrays have in common:

const arr1 = ["tree", "river", "mountain"];
const arr2 = ["ocean", "tree", "sand"];

// iterate over the first array and compare each element to each element of the second array
// iterate over the second array to get each element to be compared to the first

for (let index = 0; index < arr1.length; index++) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[index] === arr2[i]) {
      console.log(arr1[index]);
    }
  }
}
