const express = require('express');

const router = express.Router();
const Element = require('../models/Element');

// classList: [{
//     type: String
// }],
// element: {
//     type: String
// },
// content: {
//     type: String
// },
// style: [{
//     property: {
//         type: String
//     },
//     value: {
//         type: String
//     }
// }],
// createdAt: {
//     type: Number,
//     default: Date.now()
// },
// children: [{
//     classList: [{
//         type: String
//     }],
//     element: {
//         type: String
//     },
//     content: {
//         type: String
//     },
//     style: [{
//         property: {
//             type: String
//         },
//         value: {
//             type: String
//         }
//     }]
// }]

//create element route
router.post('/', async (req, res) => {
    // const { classLi } = req.body;
});

//get element route
router.get('/', async (req, res) => {
});

module.exports = router;