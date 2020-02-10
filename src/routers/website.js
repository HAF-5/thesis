const express = require('express');

const router = express.Router();
const Website = require('../models/Website');
const Page = require('../models/Page');

//create website route
router.post('/', async (req, res) => {
    const { title, user, description, contact, img } = req.body;
    try {
        const website = new Website({ title, user, description, contact, img });
        const doc = await website.save();
        const page = new Page({ title: 'home', website: doc._id });
        await page.save();
        res.status(201).json(doc);
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
});

//get websites route
router.get('/:id', async (req, res) => {
    try {
        const doc = await Website.find({ user: req.params.id });
        res.status(200).json(doc);
    } catch (err) {
        res.status(400).send(err);
    }
});

//get website pages route
router.get('/pages/:websiteId', async (req, res) => {
    try {
        const doc = await Page.find({ website: req.params.websiteId });
        res.status(200).json(doc);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;