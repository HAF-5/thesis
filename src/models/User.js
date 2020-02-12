const mongoose = require('mongoose');
const crypto = require('crypto');

// user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
    image: {
        type: String,
        default: 'https://lh6.googleusercontent.com/proxy/CZRKWpd4BjXGy7yOapnD4OXrRqMczjfyGqg3A85IpMA_Hq61yO3c6bUBBMtoWKMYEJZJSE5FA3rVHff8IktGgCRGxvQPuV3N8bX0wcYz1CdzQKVOweiKQHr9'
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
}, { timestamp: true });

// virtual
userSchema.virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () {
        return this._password;
    });

// methods
userSchema.methods = {
    toJSON: function () {
        let user = this;
        let userObject = user.toObject();
        return {
            _id: userObject._id,
            name: userObject.name,
            email: userObject.email,
            image: userObject.image
        }
    },
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function (password) {
        if (!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    },

    makeSalt: function () {
        return Math.round(new Date().valueOf() * Math.random()) + '';
    }
};

module.exports = mongoose.model('User', userSchema);