const User = require('../models/User');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email })
  if (user) {
    return res.status(400).json({
      error: 'Email is taken'
    });
  };
  const token = jwt.sign({ name, email, password }, process.env.JWT_ACCOUNT_ACTIVATION, { expiresIn: '10m' });
  return res.send(token);

  // const emailData = {
  //   from: process.env.EMAIL_FROM,
  //   to: email,
  //   subject: `Account activationlink`,
  //   html: `
  //     <h1>Please use the following link to activata your account</h1>
  //     <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>`
  // };

  // await sgMail.send(emailData)
  // try {
  //   return res.json({
  //     message: `Email has been sent to ${email}. Follow the instruction to activate your account`
  //   });
  // } catch (err) {
  //   console.log('sendGridError: ', err)
  // }
};

exports.accountActivation = async (req, res) => {
  const { token } = req.body;
  if (token) {

    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          error: 'Expired link, signup again'
        });
      };

      const { name, email, password } = jwt.decode(token);
      const newUser = new User({ name, email, password });

      newUser.save()
      try {
        res.json({
          saved: 'Signup success, Please signin'
        });
      } catch (err) {
        console.log('accountActivation: ', err);
      }
    });

  } else {
    return res.status(401).json({
      error: 'Somthing went wrong, try again'
    });
  }
};

exports.signin = async (req, res) => {
  var { email, password } = req.body;
  // check if user exist
  const user = await User.findOne({ email })
  try {
    // authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: 'Email or Password doesn\'t match'
      });
    }
  } catch (err) {
    if (!user) {
      return res.status(400).json({
        error: 'User with that email does not exist, please signup'
      });
    }
  }

  // generate a token and send to client
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  var { _id, name, email, role } = user;
  return res.json({
    token,
    user: { _id, name, email, role }
  });
}