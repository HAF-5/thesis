const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async(req, res, next) => {
    const token = req.header('auth').replace('Bearer ', '');
    const data = jwt.verify(token, process.env.JWT_KEY);
    try {
        const user = await User.findOne({_id: data._id, 'tokens.token': token});
        if(!user){
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch(error) {
        res.status(401).send({error: 'sorry you are not authenticated'})
    }
}

module.exports = auth;