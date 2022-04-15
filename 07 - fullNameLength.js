// create a function fullNameLength that receives the name and surname as parameters
//   and returns the length of the full name,
//   counting with the extra space that separates
//   both names

const fullNameLength = (name, surname) => {
  const fullName = name.concat(" ", surname);
  return fullName.length;
};

console.log(fullNameLength("bob", "smith"));
