const express = require("express");
const router = express.Router();
const Recipes = require("./recipeDb");

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipe => {
      res.json(recipe);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "There is an error retreiving recipes from server",
      });
    });
});

router.get("/shoppinglist/:id", (req, res) => {
  const list_id = req.params.id;
  Recipes.getShoppingList(list_id)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: "There is an error retreiving shopping list from server",
      });
    });

  router.get("/instruction/:id", (req, res) => {
    const rule_id = req.params.id;
    Recipes.getInstructions(rule_id)
      .then(recipe => {
        res.json(recipe);
      })
      .catch(error => {
        res
          .status(500)
          .json({
            errorMessage:
              "There is an error retreiving instructions from server",
          });
      });
  });
});

module.exports = router;
