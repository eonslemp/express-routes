const Meat = require('../models/meat') 

const findAllMeats = (req, res) =>{
    Meat.find({},(err, foundMeat) =>{
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Index', {meats: foundMeat})
        }
    })
}

const newMeatView = (req, res) => {
    res.render('meats/New')
}

const createMeat = (req, res) => {
    Meat.create(req.body, (err, createdMeat) => {
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    })
}

const viewMeat = (req, res) => {
    Meat.findById(req.params.id, (err, foundMeat) =>{
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Show', {meat: foundMeat})
        }
    })
}

const meatEditView = (req, res) => {
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Edit', { meat: foundMeat})
        }
    })
}


const updateMeat = (req, res) => {
    Meat.findByIdAndUpdate(req.params.id, req.body, (err, foundMeat) =>{
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/meats/${req.params.id}`)
        }
    })
}       

const meatDelete = (req, res) => {
    Meat.findByIdAndDelete(req.params.id, (err, deletedMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    })
}

const meatSeed = (req, res) => {
    Meat.deleteMany({}, (err, deletedMeats) => {
        if(err){
            res.status(400).json(err)
        } else {
            Meat.create(meatStart, (err, createdMeat) => {
                if(err){
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/meats')
                }
            })
        }
    })
}

module.exports = {
    findAllMeats,
    newMeatView,
    createMeat,
    viewMeat,
    meatEditView,
    updateMeat,
    meatDelete,
    meatSeed

}