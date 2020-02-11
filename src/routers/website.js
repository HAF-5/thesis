const express = require("express");

const router = express.Router();
const Website = require("../models/Website");
const Page = require("../models/Page");

//create website route
router.post("/", async (req, res) => {
  const { title, user, description, contact, img } = req.body;
  try {
    const website = new Website({ title, user, description, contact, img });
    const doc = await website.save();
    const page = new Page({ title: "home", website: doc._id });
    await page.save();
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//get websites route
router.get("/:id", async (req, res) => {
  try {
    const doc = await Website.find({ user: req.params.id });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
});

//get website pages route
router.get("/pages/:websiteId", async (req, res) => {
  try {
    const doc = await Page.find({ website: req.params.websiteId });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
});

//delete website route
router.get("/delete/:id", async (req, res) => {
  try {
    const doc = await Website.findByIdAndDelete(req.params.id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).send(err);
  }
});
//update website route
router.post("/update/:id", async (req, res) => {
  const { img, title, description } = req.body;
  const { email, phoneNumber } = req.body.contact;
  console.log(req.body);
  try {
    const website = await Website.findById(req.params.id);
    if (!website) {
      return res.status(400).json({
        error: "Website not found"
      });
    }
    if (!title) {
      return res.status(400).json({
        error: "Title is required"
      });
    } else {
      website.title = title;
      website.img = img;
    }
    if (!description) {
      return res.status(400).json({
        error: "description is required"
      });
    } else {
      website.description = description;
    }
    if (!email) {
      return res.status(400).json({
        error: "email is required"
      });
    } else {
      website.contact.email = email;
    }
    if (!phoneNumber) {
      return res.status(400).json({
        error: "phone number is required"
      });
    } else {
      website.contact.phoneNumber = phoneNumber;
    }
    await website.save((err, updateInfo) => {
      if (err) {
        return res.status(400).json({
          error: "website update failed"
        });
      }
      return res.json(updateInfo);
    });
  } catch (err) {
    console.log(err);

    return res.status(400).send(err);
  }
});
module.exports = router;
