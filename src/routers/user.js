const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

//user signup route
router.post('/', async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).json({user, token});
    }catch(err){
        res.status(400).send(err);
    }
});

//user login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        if(!user) {
            return res.status(401).send({error: 'Sorry You are not Authenticated'});
        }
        const token = await user.generateAuthToken();
        res.send({user, token});
    } catch (err) {
        res.status(400).send();
    }
});

router.get('/me', auth, async (req, res) => {
    res.send(req.user);
});

router.post('/me/logout', auth, async (req, res) => {
    try {
        let user = User.findById(req.user._id);
        user.tokens = user.tokens.filter((token) => {
            return token.token != req.token;
        });
        await user.save();
        res.send();
    } catch(error) {
        res.status(500).send();
    }
});

module.exports = router;