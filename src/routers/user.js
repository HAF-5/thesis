const express = require('express');
const router = express.Router();

// import controllrs
const { signup, accountActivation, signin } = require('../controllers/auth');

// import validators
const { ueserSignupValidator, ueserSigninValidator } = require('../middleware/auth');
const { runValidation } = require('../middleware');


router.post('/signup', ueserSignupValidator, runValidation, signup);
router.post('/account-activation', accountActivation);
router.post('/signin', ueserSigninValidator, runValidation, signin);

module.exports = router;
