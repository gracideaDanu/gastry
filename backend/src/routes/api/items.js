const express = require('express')
const router = express.Router()

// Item Model
const Item = require('../../models/Item')

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const newItem = await new Item({
            name: req.body.name
        });
        newItem.save().then(item => res.json(item))

    } catch (e) {
        res.send({
            error: e
        })

    }
})

router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
})

module.exports = router
