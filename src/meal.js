function nameMenuItem(food) {
  return  `Delicious ${food}`;
}


function createMenuItem(menuItem, itemCost, typeOfMeal) {
  return {
    name: menuItem,
    price: itemCost,
    type: typeOfMeal
  }
}

function addIngredients(newIngredient, ingredients) {
  if (ingredients.includes(newIngredient) === false) {
    ingredients.push(newIngredient);
  }
  return ingredients;
}


function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(initialPrice) {
  var discount = initialPrice / 10;
  return initialPrice - discount;
}

function createRecipe(menuItem, ingredients, typeOfMeal) {
  return {
    title: menuItem,
    ingredients: ingredients,
    type: typeOfMeal
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
