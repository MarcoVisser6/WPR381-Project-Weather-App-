//Open Weather Map API Key: 2af550162ed8871fabf0fed4afe2a6e6
//Load all required modules.
const express = require('express'); 

//Create an object for the express module.
const app = express();

// The first route
app.get('/', function (req, res) {
    res.sendFile('./pages/index.html',{root:__dirname});
});

// The second route
app.get('/about', function (req, res) {
    res.send('Second Route',{root:__dirname});
});

//Default 404 output.
app.use(function (req, res) {
    res.sendFile('./pages/404.html',{root:__dirname});
})

// Listen to port 5000
app.listen(5000, function () {
    console.log('App listening on port 5000!');
});