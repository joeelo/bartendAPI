const router = require("express").Router();
const Cocktail = require("../models/Cocktail");
const drinkData = require("../data/drinkData");
const drinks = require("../data/Drinks");

router.get("/drink/:name", async (req, res) => {
    try {
        console.log(req.params.name, 'hi');
        const cocktail = await Cocktail.find({
            "ingredients": { $in: req.params.name }
        })
        res.send(cocktail);
    } catch (error) {
        res.send(error);
    }
})

router.post("/multiple-drinks", async (req, res) => {
    try {
        console.log("working");
        res.send(drinks);
        return Cocktail.insertMany(drinks)
    } catch (error) {
        console.log(error);
    }
})

router.post("/drinks", async (req, res) => {
    try {
        const {name, ingredients, measurements, instructions, image, description} = req.body;
        const cocktail = new Cocktail();
        cocktail.name = name;
        cocktail.ingredients = ingredients;
        cocktail.measurements = measurements;
        cocktail.instructions = instructions;
        cocktail.image = image;
        cocktail.description = description;
        await cocktail.save(err => {
            if (err) {
                console.log(err);
                return
            }
            res.send(cocktail)
        });
        // res.send(cocktail);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;
