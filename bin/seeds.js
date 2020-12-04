require("dotenv").config()
const mongoose = require("mongoose")
const data = require("./data")
const Movies = require("../models/Movie.model")

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

async function seedDb(){
    try {
        await mongoose.connect('mongodb://localhost/express-cinema-dev', dbOptions)
        const movies = await Movies.create(data)
        console.log(movies)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}

seedDb()