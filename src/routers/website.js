const express = require('express');

const router = express.Router();
const Website = require('../models/Website');

//create website route
router.post('/', async (req, res) => {
    const {title, user} = req.body;
    try{
        const website = new Website({title, user});
        const doc = await website.save();
        res.status(201).json(doc);
    }catch(err){
        res.status(400).send(err);
    }
});

//get websites route
router.get('/', async (req, res) => {
    try{
        const doc = await Website.find();
        res.status(200).json(doc);
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;