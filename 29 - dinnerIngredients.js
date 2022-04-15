// declare function dinnerIngredients that receives an array of ingredients. Iterate over the array and console.log() the following string on each iteration: 'I have fridgeitem in my fridge'

const dinnerIngredients = (ingredients) => {
  ingredients.forEach((ingredient) =>
    console.log(`I have ${ingredient} in my fridge`)
  );
};

const ingredients = ["eggs", "ketchup", "milk", "chocolate", "cheese"];

dinnerIngredients(ingredients);
