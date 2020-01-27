const express = require('express');

const router = express.Router();
const Page = require('../models/Page');
const Website = require('../models/Website');

//create page route
router.post('/', async (req, res) => {
    const {title, website} = req.body;
    try{
        const pageExist = await Page.findOne({title, website});
        if(!pageExist){
            const page = new Page({title, website});
            const doc = await page.save();
            let websiteDoc = await Website.findById(website);
            websiteDoc.page = websiteDoc.page.concat(doc._id);
            await websiteDoc.save();
            res.status(201).json(doc);
        } else {
            res.status(200).json({message: "page with this name already exists."}); 
        }
    }catch(err){
        console.log(err)
        res.status(400).send(err);
    }
});

//get page route
router.get('/', async (req, res) => {
    try{
        const doc = await Page.find();
        res.status(200).json(doc);
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;