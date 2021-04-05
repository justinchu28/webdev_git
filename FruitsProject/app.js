
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true})   // connects to fruitsDB database or creates it if it does not exists

const fruitSchema = new mongoose.Schema ({      // specify structure of collection
    name: {
        type: String,
        required: [true, "Please check data, no name specified"]
    },
    rating: {
        type: Number,
        max: 10,
        min: 0
    },
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)  // create collectiong called Fruits (mongoose pluralizes fruit)

const fruit = new Fruit({     // create a fruit document
    name:"Apple",
    rating:7,
    review:"pretty good"
})

fruit.save()   // add fruit (apple) into Fruits collection inside the fruitsDB databse

const kiwi = new Fruit({
    name: "kiwi",
    rating:10,
    review:"best"
})

const orange = new Fruit({
    name: "orange",
    rating:9,
    review:"best"
})

Fruit.insertMany([kiwi, orange], function(err){
    if (err)
        console.log("error")
    else 
        console.log("success")
})

Fruit.find()

Fruit.find(function(err, fruits){       // find all items in fruits collection 
    if (err) console.log(err)
    else {
        mongoose.connection.close();
        fruits.forEach(function(element){ console.log(element.name) })
    }
})

Fruit.updateOne({_id: "dfsghfdhfghf"}, {name: "Peach"}, function(err){   // update name of item with id: ...
    if (err) console.log("error")
    else console.log("update success")
})

Fruit.deleteOne({name: "Peach"}, function(err){     // delete item with name peach
    if (err) console.log("error")
    else console.log("delete success")
})

Fruit.deleteMany({name: "Apple"}, function(err){     // deletes all items with name: John

})


mongoose.connect("mongodb://localhost:27017/peopleDB", {useNewUrlParser: true, useUnifiedTopology: true}) 

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favFruit: fruitSchema
})

const People = mongoose.model("people", peopleSchema)

const person = new People({
    name:"Justin",
    age:21,
    favFruit: kiwi
})

person.save()     

