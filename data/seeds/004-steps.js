exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          id: 1,
          recipeId: 1,
          stepNumber: 1,
          instruction: "Marinated the chicken",
        },
        {
          id: 2,
          recipeId: 1,
          stepNumber: 2,
          instruction: "Pan fried it for 6 minutes",
        },
        {
          id: 3,
          recipeId: 1,
          stepNumber: 3,
          instruction: "Add soy sauce and honey",
        },
        {
          id: 4,
          recipeId: 1,
          stepNumber: 4,
          instruction:
            "Cook for another 3-5 minutes until the chicken is fully cooked",
        },
        {
          id: 5,
          recipeId: 2,
          stepNumber: 1,
          instruction: "Dice up onion, guacamole and cilantro",
        },
        {
          id: 6,
          recipeId: 2,
          stepNumber: 2,
          instruction:
            "Mash onion, guacamole and cilantro together until the guacamole is mushy",
        },
        {
          id: 7,
          recipeId: 2,
          stepNumber: 3,
          instruction:
            "Add lime juice from half a lime and mix it into the mixture",
        },
      ]);
    });
};
