const express = require("express");
const app = express();
const drinks = require("./Drinks")

// Retrieve
// var MongoClient = require('mongodb').MongoClient;
// const mongo_uri = "mongodb://127.0.0.1"

// MongoClient.connect(mongo_uri, { useNewUrlParser: true,  useUnifiedTopology: true}, (error, client) => {
//     if (error) throw error;
//     console.log("connected");
// 	const db = client.db("cocktailAPI");
// 	// db.collection("cocktails").insertMany(drinks);
//     client.close();
// 	console.log("closing time!");
// })


// module.exports = drinks;