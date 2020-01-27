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
    page: [{
        type: mongoose.Types.ObjectId,
        ref: 'Page'
    }],
    createdAt: {
        type: Number,
        default: Date.now()
    }
});

const Website = mongoose.model('Website', websiteSchema);

module.exports = Website;