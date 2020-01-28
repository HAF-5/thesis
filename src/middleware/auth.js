const { check } = require('express-validator');

exports.ueserSignupValidator = [
  check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required'),
  check('emai')
    .not()
    .isEmail()
    .withMessage('Must be a vaild email address'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

exports.ueserSigninValidator = [
  check('emai')
    .not()
    .isEmail()
    .withMessage('Must be a vaild email address'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

