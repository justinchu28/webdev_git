//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const mongoose = require("mongoose")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolist", { useNewUrlParser: true, useUnifiedTopology: true })

const listSchema = new mongoose.Schema({
    name: String
})

const Item = mongoose.model("Item", listSchema)
const Work = mongoose.model("Work", listSchema)

const laundry = new Item({ name: "laundry" })
const paper = new Item({ name: "paper" })

const lab = new Work({ name: "lab6" })
//lab.save()

// Item.insertMany([laundry, paper], function(err){
//   if (err) console.log("error")
//   else console.log("success")
// })


//const items = ["Buy Food", "Cook Food", "Eat Food"];
//const workItems = [];

app.get("/", function (req, res) {
    const day = date.getDate();
    Item.find(function (err, items) {
        console.log(items)
        res.render("list", { listTitle: day, newListItems: items });
    })

});

app.post("/", function (req, res) {
    const item = req.body.newItem;
    if (req.body.list === "Work") {
        // workItems.push(item);
        const newWorkItem = new Work({ name: item })
        newWorkItem.save()
        res.redirect("/work");
    } else {
        // items.push(item);
        const newItem = new Item({ name: item })
        newItem.save()
        res.redirect("/");
    }
});

app.post("/delete", function (req, res) {
    let id = req.body.checkbox
    Item.findByIdAndDelete(id, function (err) {

    });
    res.redirect("/")
})

app.get("/:customListName", function (req, res) {
    var customListName = req.params.page;


});

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
