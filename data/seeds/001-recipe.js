exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          recipeName: "Sesame Chicken",
          note: "Americanized Chinese Food",
        },
        { id: 2, recipeName: "Guacamole", note: "Best with tortilla chips" },
        { id: 3, recipeName: "Miso Ramen", note: "Best ramen" },
      ]);
    });
};
