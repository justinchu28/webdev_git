const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    // res.send("Hello World");
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    // console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1 + num2;
    res.send(num1 + " + " + num2 + " = " + sum);
});

app.get("/bmicalculator", function(req, res){
    // res.send("Hello World");
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    // console.log(req.body);
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / Math.pow(height, 2);
    res.send("Your BMI is " + bmi);
});


app.listen(port, function() {
    console.log("Server started on port " + port);
});