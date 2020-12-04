const Movies = require("../models/Movie.model");

const getMovies = async (req, res) => {
    try{
        const movies = await Movies.find();
        res.render("movies",{movies});
    } catch(err){
        res.send(err)
    }
}

const getMovie = async (req, res) => {
    try{
        const { movieId } = req.params;
        const movie = await Movies.findById(movieId);
        console.log("The movie is:",movie);
        res.render("movie-detail", movie)
    } catch(err){
        res.send(err)
    }
}

module.exports = {
    getMovies,
    getMovie
}