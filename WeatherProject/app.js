const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


const https =  require("https");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
 
});

app.post("/", function(req, res){
    console.log(req.body)
    var loc = req.body.loc;
    // const query = "paris";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + loc + "&units=imperial&appid=697c89dc76231e1f370bec7ad7592d37";
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);        
            const temp = weatherData.main.temp;
            const des = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon;
            const imgurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            console.log(icon);
            res.write("<h1>" + loc + " is " + temp + " deg F </h1>");
            res.write("<p>It is " + des + "</p>");
            res.write("<img src=" + imgurl + ">");
            res.send();
        });


    });  
});





app.listen(port, function() {
    console.log("Server started on port " + port);
});