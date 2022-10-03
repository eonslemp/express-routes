// mongoose
const mongoose = require('mongoose')
// syntax shortcut
const Schema = mongoose.Schema
// create schema
const fruitSchema = new Schema({
    name: { type: String, required: true },
    color: { type:String, required: true },
    readyToEat: Boolean
})

// create a model from our schema
const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit;