//API Key: 2af550162ed8871fabf0fed4afe2a6e6
//Load all required modules.
//Git WORKS
var express = require('express'); 
var fs = require('fs');

//Create an object for the express module.
var app = express();    
var path = require("path");

// Our first route
app.get('/', function (req, res) {
    res.sendFile("./index.html");
});

// Listen to port 5000
app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});

// Our second route
app.get('/dev', function (req, res) {
    res.send('Hello, you are now on the Dev route!');
});