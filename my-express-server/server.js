const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.send("hello");
});

app.get("/contact", function(req, res){
    res.send("contact me at: ");
});

app.get("/about", function(req, res){
    res.send("hi im justin");
});

app.get("/hobbies", function(req, res){
    res.send("these are my hobbies");
});

app.listen(port, function() {
    console.log("Server started on port " + port);
});

