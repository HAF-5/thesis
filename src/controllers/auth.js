const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const _ = require("lodash");
const { OAuth2Client } = require('google-auth-library');
const fetch = require("node-fetch");
const expressJwt = require('express-jwt');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({
      error: 'Email is taken'
    });
  };

  const token = jwt.sign({ name, email, password }, process.env.JWT_ACCOUNT_ACTIVATION, { expiresIn: '20d' });

  const emailData = `
      <h1>Please use the following link to activata your account</h1>
      <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>`;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Account activationlink',
    html: emailData
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent');
      return res.json(res.json({
        message: `Email has been sent to ${email}. Follow the instruction to activate your account`
      }));
    }
  });
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
  var { _id, name, email, image } = user;
  return res.json({
    token,
    user: { _id, name, email, image }
  });
}


exports.forgotPassword = (req, res) => {
  const { email } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User with that email does not exist'
      });
    }
    const token = jwt.sign({ _id: user._id, name: user.name }, process.env.JWT_RESET_PASSWORD, { expiresIn: '20d' });

    const emailData = `
      <h1>Please use the following link to reset your password</h1>
      <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>`;

    return user.updateOne({ resetPasswordLink: token }, (err, success) => {
      if (err) {
        return res.status(400).json({
          error: "database connection error"
        });
      } else {
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASS
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        var mailOptions = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: 'Password reset link',
          html: emailData
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent');
            return res.json({
              message: `Email has been sent to ${email}. Follow the instruction to reset your password`
            });
          }
        });
      }
    });
  })
};

exports.resetPassword = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;

  if (resetPasswordLink) {
    jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD, function (err, decoded) {
      if (err) {
        return res.status(400).json({
          error: 'Expired link'
        });
      }

      User.findOne({ resetPasswordLink }, (err, user) => {
        if (err || !user) {
          return res.status(400).json({
            error: 'Something went wrong. please try again later.'
          });
        }

        const updatedFields = {
          password: newPassword,
          resetPasswordLink: ''
        }

        user = _.extend(user, updatedFields);

        user.save((err, result) => {
          if (err) {
            return res.status(400).json({
              error: 'Error restting user password'
            });
          }
          res.json({
            message: 'Login with your new password'
          });
        });
      });

    })
  }
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.googleLogin = async (req, res) => {
  const { idToken } = req.body;
  let response = await client.verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID });
  const { email_verified, name, email } = response.payload;
  const image = response.payload.picture;

  if (email_verified) {
    let user = await User.findOne({ email });
    try {
      if (user) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        const { _id, email, name, image } = user;
        return res.json({
          token, user: { _id, email, name, image }
        });
      } else {
        let password = email + process.env.JWT_SECRET;
        user = new User({ name, email, password, image });
        user.save((err, data) => {
          if (err) {
            return res.status(400).json({
              error: 'User signup failed with google'
            });
          }
          const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
          const { _id, email, name, image } = data;
          return res.json({
            token, user: { _id, email, name, image }
          });
        });
      }
    } catch (err) {
      console.log('error', err)
    }
  } else {
    return res.status(400).json({
      error: 'Google login failed try again'
    });
  }
}

exports.facebookLogin = async (req, res) => {
  const { userID, accessToken } = req.body;
  const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`;

  let response = await fetch(url, {
    method: 'GET'
  });

  const data = await response.json();
  console.log(data);
  const { email, name } = data;

  let user = await User.findOne({ email });
  try {
    if (user) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      const { _id, email, name } = user;
      return res.json({
        token, user: { _id, email, name, image }
      });
    } else {
      let password = email + process.env.JWT_SECRET;
      user = new User({ name, email, password });
      user.save((err, data) => {
        if (err) {
          return res.status(400).json({
            error: 'User signup failed with facebook'
          });
        }
        const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        const { _id, email, name } = data;
        return res.json({
          token, user: { _id, email, name, image }
        });
      });
    }
  } catch (err) {
    res.json({
      error: 'Facebook login failed.'
    });
  }
};

exports.auth = expressJwt({
  secret: process.env.JWT_SECRET
});