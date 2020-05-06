const express = require('express')
const router = express.Router()

// Item Model
const Item = require('../../models/Item')

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item))
})

router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
})

module.exports = router