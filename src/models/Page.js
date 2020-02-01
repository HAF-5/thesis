const mongoose = require('mongoose');
const Element = require('./Element');

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
    element: [],
    createdAt: {
        type: Number,
        default: Date.now()
    }
});

const createElement = async function(pageId, element) {
    let elementDoc = await Element.create(element);
    let pageDoc = await Page.findByIdAndUpdate(
        pageId,
        {
          $push: {
            element: {
              _id: elementDoc._id,
              type: elementDoc.type,
              element: elementDoc.element
            }
          }
        },
        { new: true, useFindAndModify: false }
    );
    return elementDoc;
};

const Page = mongoose.model('Page', pageSchema);


module.exports = Page;
module.exports.createElement = createElement;