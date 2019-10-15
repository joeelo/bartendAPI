const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CocktailSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        unique: true
    },
    ingredients: [{
        type: String
    }], 
    measurements: [{
        type: String
    }],
    instructions: {
        type: String, 
        required: true
    }, 
    image: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
    }
})

const Cocktail = mongoose.model("Cocktail", CocktailSchema);

Cocktail.schema.pre("save", function(next) {
    console.log(this);
    next();
})

module.exports = Cocktail;