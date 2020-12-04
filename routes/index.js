const express = require('express');
const router = express.Router();

const {getMovies,getMovie} = require ("../controllers/movies.controllers.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
//Render Relatives Paths
router
.get("/movies", getMovies)
.get("/:movieId", getMovie);

module.exports = router;
