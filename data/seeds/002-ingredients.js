exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredientName: "Chicken" },
        { id: 2, ingredientName: "Soy Sauce" },
        { id: 3, ingredientName: "Honey" },
        { id: 4, ingredientName: "Avocado" },
        { id: 5, ingredientName: "Onion" },
        { id: 6, ingredientName: "Lime" },
      ]);
    });
};
