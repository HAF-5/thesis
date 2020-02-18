const express = require('express');
const router = express.Router();

const Website = require('./../models/Website');
const Page = require('./../models/Page');


//GET /api/:websiteTitle/:pageTitle
router.get('/:websiteTitle/:pageTitle', async (req, res) => {
    try {
        let website = await Website.findOne({title: req.params.websiteTitle});
        const doc = await Page.findOne({website: website._id, title: req.params.pageTitle});
        res.status(200).json(doc.element);
    } catch(err) {
        console.log(err)
        res.status(400).send(err);
    }
});

module.exports = router;