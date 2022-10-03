const mongoose = require('mongoose')

const veggieSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true}
})

const Vegetable = mongoose.model('vegetable', veggieSchema)

module.exports = Vegetable;