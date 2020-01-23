const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Number,
        default: Date.now()
    }
})

userSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    return {
        _id: userObject._id,
        name: userObject.name,
        email: userObject.email
    }
};


userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY);
    user.tokens = user.tokens.concat({token: token});
    await user.save();
    return token;
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email});
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' });
    }
    return user;
}

const User = mongoose.model('User', userSchema);

module.exports = User;