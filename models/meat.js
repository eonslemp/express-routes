const mongoose = require('mongoose')

const meatSchema = new mongoose.Schema({
        name: { type: String, required: true},
        type: { type: String, required: true}
})

const Meat = mongoose.model('Meat', meatSchema)

module.exports = Meat;