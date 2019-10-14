const mongoose = require("mongoose");
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/mainRouter");

app.use(bodyParser.urlencoded({extended: true}));
app.use(apiRoutes);

const mongoDB = 'mongodb://127.0.0.1/bartendAPI';
var connection = mongoose.createConnection(mongoDB,
                                           {useNewUrlParser: true, 
                                            useUnifiedTopology: true});

const port = process.env.PORT || 8080;

app.listen( port, () => {
    console.log("app is connected");
})

