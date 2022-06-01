const { Router } = require("express");

const { addMovie, listMovie } = require  ("./MovieControllers")

const movieRouter = Router();

// use http verb post to aadd data ro our movie endpoint

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovie);

module.exports = movieRouter; 