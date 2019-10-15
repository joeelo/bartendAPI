const router = require("express").Router();
const Cocktail = require("../models/Cocktail");

router.get("/", async (req, res) => {
    try {
        res.send("first route!");
    } catch (error) {
        res.send(error);
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
        await cocktail.save(function(err) {
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