const express = require('express');
const router = new express.Router()
const Exercise = require('../models/exercise.model');

router.post('/exercise/add', (req, res) => {
    const exercise = new Exercise(req.body)
    exercise.save()
        .then(() => res.send('exercise added')).catch()

    // res.send(req.body)
})

router.get('/exercise', (req, res) => {
    // const exercise = new Exercise(req.body)
    Exercise.find()
        .then((exercises) => res.send(exercises)).catch()

    // res.send(req.body)
})

router.get('/exercise/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then((exercise) => res.send(exercise))
        .catch((error) => res.send(error))
})

router.delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.send('exercise deleted')).catch((error) => res.status(400).send(error))
})

router.post('/update/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then((exercise) => {
            exercise.name = req.body.name
            exercise.description = req.body.description
            exercise.duration = Number(req.body.duration)
            exercise.date = Date.parse(req.body.date)
            exercise.save()
                .then(() => res.send('exercise updated')).catch((error) => res.send(error))
        }).catch((error) => res.send(error))

})

module.exports = router