const Fruit = require('../models/fruit')



const findAllFruits = (req, res) => {
    Fruit.find({}, (err, foundFruit) => {
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Index', { fruits: foundFruit})
        }
    })
}

const showNewView = (req, res) => {     
    // res.send('<form>Create fruit</form>')
    res.render('fruits/New')
    // res.render('fruits/New')
}


const createNewFruit = (req, res) => {     
    if (req.body.readyToEat === "on"){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    Fruit.create(req.body, (err, createdFruit) =>{
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    })
}

const seedStarterData = (req, res) => {
    Fruit.deleteMany({}, (err, deletedFruits) => {
        if(err) {
            res.status(400).json(err)
        } else {
            Fruit.create(seed.fruits, (err, createdFruit) => {
                if(err){
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/fruits')
                }
            })
        }
    })
}

const showOneFruit = (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) =>{
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Show', {fruit: foundFruit})
        }
    })
}


const showEditView = (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Edit', { fruit: foundFruit})
        }
    })
}

const updateOneFruit = (req, res) =>{
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, foundFruit)=>{
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/fruits/${req.params.id}`)
        }
    })
}

const deleteOneFruit = (req, res) => {
    Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) =>{
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    })
}






module.exports = {
    findAllFruits,
    showNewView,
    createNewFruit,
    seedStarterData,
    showOneFruit,
    showEditView,
    updateOneFruit,
    deleteOneFruit
}