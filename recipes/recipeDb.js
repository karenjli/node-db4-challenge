const db = require("../data/dbConfig");

module.exports = { getRecipes, getShoppingList, getInstructions };

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipeId) {
  return db("recipeIngredients as ri")
    .join("ingredients as i", "ri.ingredientId", "i.id")
    .where({ recipeId });
}

function getInstructions(recipeId) {
  return db("steps").where({ recipeId });
}
