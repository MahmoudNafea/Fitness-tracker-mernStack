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


module.exports = router