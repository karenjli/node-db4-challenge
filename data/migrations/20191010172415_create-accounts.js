exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipeName", 255)
        .unique()
        .notNullable();
      tbl.text("note");
    })

    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ingredientName", 255)
        .unique()
        .notNullable();
    })

    .createTable("recipeIngredients", tbl => {
      tbl
        .integer("recipeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");

      tbl
        .integer("ingredientId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");

      tbl
        .integer("quantity")
        .unsigned()
        .notNullable();

      tbl.primary(["recipeId", "ingredientId"]);
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl
        .integer("recipeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("stepNumber")
        .unsigned()
        .notNullable();

      tbl.text("instruction").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipeIngredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
