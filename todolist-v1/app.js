const express = require('express');
const app = express();
 
const https =  require("https");

const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js")

var items = []
var workItems = [];

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs')

app.use(express.static("public"))      // create a public folder and place css files in it for server css
 
app.get("/", function(req, res){

    let day = date.getDate();
    

    res.render("list", {
        listTitle: day,
        items: items
    })
});

app.post("/", function(req, res){
    let item = req.body.item

    if (req.body.list === "Work") {
        workItems.push(item)
        res.redirect("/work")
    }
    else {
        items.push(item);
        res.redirect("/")
    }
})
  

app.get("/work", function(req, res){
    res.render("list", {
        listTitle: "Work",
        items: workItems
    })
})

app.get("/about", function (req, res) {
    res.render("about");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port");
});
 

