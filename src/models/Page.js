const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    website: {
        type: mongoose.Types.ObjectId,
        ref: 'Website'
    },
    element: [{
        type: mongoose.Types.ObjectId,
        ref: 'Element'
    }],
    createdAt: {
        type: Number,
        default: Date.now()
    }
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;