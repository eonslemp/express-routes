// Load express
const express = require('express')

// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')
const meatRoutes = require('./routes/meatRoutes')

require('dotenv').config()


// Creates our express app (object)
const app = express()
const mongoConfig = require('./config')
const methodOverride = require('method-override')
// Identify our port
const port = 3000

// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride('_method'))

// ?name=kiwi&color=green&readyToEat=value

app.use('/fruits', fruitRoutes)
app.use('/meats', meatRoutes)
app.use('/vegetables', vegetableRoutes)

// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})


mongoConfig()
