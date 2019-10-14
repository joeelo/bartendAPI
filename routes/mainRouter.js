const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        res.send("first route!");
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;