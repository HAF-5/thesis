const mongoose = require('mongoose');

const websiteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
    }, 
    contact: {
        phoneNumber: Number,
        email: String
    },
    img: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Website = mongoose.model('Website', websiteSchema);

module.exports = Website;