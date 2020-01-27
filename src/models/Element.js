const mongoose = require('mongoose');

const elementSchema = mongoose.Schema({
    classList: [{
        type: String
    }],
    element: {
        type: String
    },
    content: {
        type: String
    },
    style: [{
        property: {
            type: String
        },
        value: {
            type: String
        }
    }],
    createdAt: {
        type: Number,
        default: Date.now()
    },
    children: [{
        classList: [{
            type: String
        }],
        element: {
            type: String
        },
        content: {
            type: String
        },
        style: [{
            property: {
                type: String
            },
            value: {
                type: String
            }
        }]
    }]
});

const Element = mongoose.model('Element', elementSchema);

module.exports = Element;