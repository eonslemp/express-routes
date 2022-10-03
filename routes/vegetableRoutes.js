
const express = require('express')

const router = express.Router()

const vegetables = require('../models/seed').vegetables

const Vegetable = require('../models/vegetable')

const {
    findAllVegetables,
    createVegetable,
    vegetableShow,
    newVegView,
    vegEditView,
    updateVeg,
    deleteVeg
} = require('../controllers/vegetableController')


router.get('/', findAllVegetables)

router.get('/new', newVegView)

router.post('/', createVegetable)

router.get('/:id', vegetableShow)

router.get('/:id/edit', vegEditView)

router.put('/:id', updateVeg)

router.delete('/:id', deleteVeg)

module.exports = router
