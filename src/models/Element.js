const mongoose = require('mongoose');

const elementSchema = mongoose.Schema({
    type: String,
    element: String
});

const Element = mongoose.model('Element', elementSchema);

module.exports = Element;