const express = require("express");

const recipeRouter = require("./recipes/recipeRouter");

const server = express();

server.get("/", (req, res) => {
  res.send(`<h2>We are about to see some great recipes</h2>`);
});

server.use(express.json());
server.use("/api/recipe", recipeRouter);

module.exports = server;
