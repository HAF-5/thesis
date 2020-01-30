const express = require('express');
const router = express.Router();

// import controllrs
const { signup, accountActivation, signin, forgotPassword, resetPassword, googleLogin } = require('../controllers/auth');

// import validators
const {
  ueserSignupValidator,
  ueserSigninValidator,
  forgotPasswordValidator,
  resetPasswordValidator } = require('../middleware/auth');

const { runValidation } = require('../middleware');


router.post('/signup', ueserSignupValidator, runValidation, signup);
router.post('/account-activation', accountActivation);
router.post('/signin', ueserSigninValidator, runValidation, signin);
router.post('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.post('/reset-password', resetPasswordValidator, runValidation, resetPassword);
router.post('/google-login', googleLogin);

module.exports = router;
