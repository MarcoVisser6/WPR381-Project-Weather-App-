//Open Weather Map API Key: 2af550162ed8871fabf0fed4afe2a6e6
// API Call: pro.openweathermap.org/data/2.5/forecast/hourly?zip={zip code},{country code}&appid={API key}

//Load all required modules.
const express = require('express'); 
var path = require('path');
var weather = require('openweather-apis');

//Set settings for open weather api:
weather.setLang('en');
weather.setAPPID('2af550162ed8871fabf0fed4afe2a6e6');
weather.setUnits('metric');

//Create an object for the express module.
const app = express();

//Third party middleware.
app.use(express.urlencoded({extended:true}));

// The first route.
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

//Receive location from front-end.
app.post('/getLocation', function (req, res) {
    weather.setZipCode(40721);
    weather.getTemperature(function(err, temp){
        if (err) {
            res.send('An error occurred: ' + err);
        }else{
            res.send('Current Temp: ' + temp);
        }
    });
});

// The second route.
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/about.html'));
});

//Default 404 route.
app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/404.html'));
})

// Listen to port 5000
app.listen(5000, function () {
    console.log('App listening on port 5000!');
});