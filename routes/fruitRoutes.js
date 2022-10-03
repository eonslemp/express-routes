// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Load our fruits data
const fruits = require('../models/fruits')

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', (req, res) => {  
    // res.send(fruits)
    res.render('fruits/Index', { fruits: fruits })
})

// Setup "new" route
router.get('/new', (req, res) => {     
    // res.send('<form>Create fruit</form>')
    res.render('fruits/New')
})

// Setup "create" route
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
    // res.send(fruits[req.params.index])
    res.render('fruits/Show', { fruit: fruits[req.params.index] })
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a fruit at index! (in DB)')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a fruit at index! (in DB)')
})

module.exports = router
