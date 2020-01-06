const express = require('express')
const router = new express.Router()
const User = require('../models/user.model')

router.post('/users/add', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send('user add')
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/users', async (req, res) => {
    User.find()
        .then((users) => res.send(users))
        .catch((error) => res.status(400).send(error))

    // try {
    //     const users = await User.find()
    //     res.send(users)
    // } catch (error) {
    //     res.status(400).send(error)
    // }
})

module.exports = router