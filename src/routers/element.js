const express = require('express');

const Element = require('../models/Element');
const Page = require('../models/Page');

const { createElement } = require('./../models/Page');

const router = express.Router();

//create element route
//POST /api/element
router.post('/', async (req, res) => {
    try {
        const { pageId, element } = req.body;
        console.log(req.body)
        let doc = await createElement(pageId, element);
        res.status(201).send(doc);
    } catch(err) {
        console.log(err)
        res.status(400).send();
    }
});

//get element route
//GET /api/element/:pageId
router.get('/:pageId', async (req, res) => {
    try {
        const doc = await Page.findById(req.params.pageId);
        res.status(200).json(doc.element);
    } catch(err) {
        console.log(err)
        res.status(400).send(err);
    }
});

module.exports = router;