const express = require('express');
const path = require('path');
const morgan = require('morgan');

const publicPath = path.join(__dirname, '..', 'client', 'build');

require('./db/db');
const app = express();

// import routes
const userRouter = require('./routers/user');

// app middleware 
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(publicPath));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, auth");
    next();
});

app.use('/api/user', userRouter);


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

module.exports = app;
