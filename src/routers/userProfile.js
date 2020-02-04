const express = require('express');
const router = express.Router();

// import controllrs
const { auth } = require('../controllers/auth');
const { read, update } = require('../controllers/userProfile');


router.get('/user/:id', auth, read);
router.post('/user/update', auth, update);

module.exports = router;
