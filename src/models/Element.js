const mongoose = require('mongoose');

const elementSchema = mongoose.Schema({
    classList: [{
        type: String
    }],
    children: [{
        type: mongoose.Types.ObjectId,
        ref: 'Element'
    }],
    createdAt: {
        type: Number,
        default: Date.now()
    }
});

const Element = mongoose.model('Element', elementSchema);

module.exports = Element;