const Vegetable = require('../models/vegetable')

const findAllVegetables = (req, res) => {
    Vegetable.find({}, (err, foundVegetable) => {
        if(err) { 
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Index', { vegetables: foundVegetable})
        }
    })
}

const createVegetable = (req, res) => {
    Vegetable.create(req.body, (err, createdVegetable) =>{
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        } 
    })
}

const vegetableShow = (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) =>{
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Show', {vegetable: foundVegetable})
        }
    })
}

const newVegView = (req, res) => {
    res.render('vegetables/New')
}

const vegEditView = (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if (err){
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Edit', { vegetable: foundVegetable })
        }
    })
}

const updateVeg = (req, res) =>{
    Vegetable.findByIdAndUpdate(req.params.id, req.body, (err, foundVegetable)=> {
        if(err) {
            res.status(400).json(err)
        } else { 
            res.status(200).redirect(`/vegetables/${req.params.id}`)
        }
    })
}

const seedVegData = (req, res) =>{
    Vegetable.deleteMany({}, (err, deletedVegetables) =>{
        if (err) {
            res.status(400).json(err)
        } else {
            Vegetable.create(vegetables, (err, createdVegetable) =>{
                if(err){
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/fruits')
                }
            })
        }
    })
}

const deleteVeg = (req, res) => {
    Vegetable.findByIdAndDelete(req.params.id,(err, deletedVegetable) =>{
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    })
}



module.exports = {
    findAllVegetables,
    createVegetable,
    vegetableShow,
    newVegView,
    vegEditView,
    updateVeg,
    deleteVeg,
    seedVegData
}
