const express = require('express')

const router = express.Router()

// const meats = require('../models/meat')

const Meat = require('../models/meat')

const seed = require('../models/seed')

const meatStart = seed.meats

const {
    findAllMeats,
    newMeatView,
    createMeat,
    viewMeat,
    meatEditView,
    updateMeat,
    meatDelete,
    meatSeed
} = require('../controllers/meatController')


router.get('/', findAllMeats)

router.get('/new', newMeatView)

router.post('/', createMeat)

router.get('/:id', viewMeat)

router.get('/:id/edit', meatEditView)

router.put('/:id', updateMeat)

router.delete('/:id', meatDelete)

router.get('/seed', meatSeed)



module.exports = router