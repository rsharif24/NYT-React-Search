var express = require('express');
var request = require('request');
var mongoose = require('mongoose');
var router = express.Router();
var Article = require('../models/Articles.js');

// var app = express();

mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function () {
    console.log("Successfully Connected to Mongoose");
});

router.get("/api/saved", function (req, res) {
    Article.find({}, function (error, doc) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(doc);
        }
    });
});

router.post("/api/saved", function (req, res) {
    var savedArticle = new Article(req.body);
    savedArticle.save()
        .then(function (err, doc) {
            res.json(doc);
        });
});

router.delete("/api/saved:id", function (req, res) {

    Article.findByIdAndRemove(req.params.id, function (err, doc){
        if(err) { 
            throw err; 
        }
        else {
            res.json(doc)
            console.log("You deleted")
        }

       
    });
});

router.get("*", function (req, res) {
    res.send("index.html")
});

module.exports = router;