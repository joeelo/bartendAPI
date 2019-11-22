const mongoose = require("mongoose");
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const drinkRoutes = require("./routes/drinkRoutes");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(drinkRoutes);

const mongoDB = 'mongodb://127.0.0.1/bartendAPI';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const port = process.env.PORT || 8080;

app.listen( port, () => {
    console.log("app is connected on port " + port);
})

