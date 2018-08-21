const router = require('express').Router()
let Car = require('../models/Car')
//you dont need .js at the end of car, node already knows to do that

// THIS IS YOUR GET 
router.get('/:id?', (req, res, next) => {
    if (!req.params.id) {
        //if they cant find the id, find ALL of this model (aka cars)
        Car.find({})
            .then(cars => {
                return res.send(cars)
            })
    }
    // otherwise just pull it by its id 
    else {
        Car.findById(req.params.id)
            .then(car => {
                res.send(car)
            })
    }
})

// THIS IS YOUR POST 
router.post('/', (req, res, next) => {
    // allowing to create new instance of car and add to database
    let newCar = req.body
    Car.create(newCar)
        .then(car => {
            res.send(car)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

// THIS IS YOUR PUT 
router.put('/:id', (req, res, next) => {
    //goes to object at id, looks at data, updates with newly requested data
    Car.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(newCar => {
            res.send(newCar)
        })
})

// THIS IS YOUR DELETE
router.delete('/:id', (req, res, next) => {
    Car.findByIdAndRemove(req.params.id) //this is hard deleting information because youre not archiving or backing up anything
        .then(oldDeletedCar => {
            res.send('DELORTED!!!')
        })
})

// this exports your router
module.exports = router 