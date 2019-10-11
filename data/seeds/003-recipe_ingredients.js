exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipeIngredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipeIngredients").insert([
        { recipeId: 1, ingredientId: 1, quantity: 2 },
        { recipeId: 1, ingredientId: 2, quantity: 1 },
        { recipeId: 1, ingredientId: 3, quantity: 1 },
        { recipeId: 2, ingredientId: 4, quantity: 4 },
        { recipeId: 2, ingredientId: 5, quantity: 2 },
        { recipeId: 2, ingredientId: 6, quantity: 2 },
      ]);
    });
};
