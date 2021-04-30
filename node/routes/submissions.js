const { Submit } = require('../models/submit');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    const submissions = await Submit.find().sort('name');
    res.send(submissions);
});

router.get('/:id', async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send('submisision not found');
    const submit = await Submit.findById( req.params.id);  

    if(!submit){return res.status(404).send('submisision not found');}
    else res.send(submit);
});

module.exports = router;