var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var request = require("request");
var routes = require('./controllers/controllers.js');

var app = express();

var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.use('/', express.static(__dirname));
app.use(express.static("public"));
app.use('/', routes);

app.listen(port, function () {
    console.log("App running on port " + port);
});
