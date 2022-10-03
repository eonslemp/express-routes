const mongoose = require('mongoose')


function mongoConfig() {
    mongoose.connect(process.env.MONGO)
    mongoose.connection.once('open', () =>{
        console.log('connected to MONGO')
})
}

module.exports = mongoConfig