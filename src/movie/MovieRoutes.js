const { Router } = require("express");

// const { addMovie, listMovie } = require  ("./MovieControllers")

const movieRouter = Router();
const {
	addMovie,
	listMovie,
	updateMovie,
	deleteMovie,
} = require("./movieControllers");



movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovie);
movieRouter.patch("/movie", updateMovie);
movieRouter.delete("/movie", deleteMovie);

module.exports = movieRouter; 