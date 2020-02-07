const User = require('../models/User');

exports.read = async (req, res) => {
  const userId = req.user._id;
  try {
    let user = await User.findById(userId);
    if (!user) {
      throw new Error('Not Authenticated !')
    }
    return res.json(user);
  } catch (err) {
    return res.status(401).json('Not Authenticated !');
  }
};

exports.update = async (req, res) => {
  const { name, password, image } = req.body;
  try {
    let user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).json({
        error: 'User not found'
      });
    }
    if (!name) {
      return res.status(400).json({
        error: 'Name is required'
      });
    } else {
      user.name = name;
      user.image = image;
    }

    if (password) {
      if (password.length < 6) {
        return res.status(400).json({
          error: 'Password should be min 6 characters long'
        });
      } else {
        user.password = password;
      }
    }

    user.save((err, updatedUser) => {
      if (err) {
        return res.status(400).json({
          error: 'user update failed'
        });
      }
      updatedUser.hashed_password = undefined;
      updatedUser.salt = undefined;
      return res.json(updatedUser);
    })
  } catch (err) {
    return res.status(400).json({
      error: err
    });
  };

};

