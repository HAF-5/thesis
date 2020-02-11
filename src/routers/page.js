const express = require('express');

const router = express.Router();
const Page = require('../models/Page');
const Website = require('../models/Website');

//create page route
//POST /api/page/
router.post('/', async (req, res) => {
    const {title, website} = req.body;
    console.log(req.body)
    try{
        console.log(title, website)
        const pageExist = await Page.findOne({title, website});
        if(!pageExist){
            const page = new Page({title, website});
            const doc = await page.save();
            res.status(201).json(doc);
        } else {
            res.status(200).json({message: "page with this name already exists."}); 
        }
    }catch(err){
        console.log(err)
        res.status(400).send(err);
    }
});

//get a specific
//GET /api/page/"pageId"
router.get('/:pageId', async (req, res) => {
    try {
        const doc = await Page.findById(req.params.pageId);
        res.status(200).json(doc);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;