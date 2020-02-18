const express = require('express');
const path = require('path');
const morgan = require('morgan');

const userRouter = require('./routers/user');
const websiteRouter = require('./routers/website');
const pageRouter = require('./routers/page');
const elementRouter = require('./routers/element');
const userProfileRouter = require('./routers/userProfile');
const publishRouter = require('./routers/publish');

const publicPath = path.join(__dirname, '..', 'client', 'build');
const userPublicPath = path.join(__dirname, '..', 'userPublic');

require('./db/db');
const app = express();

// app middleware 
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(publicPath));
app.use('/test/', express.static(userPublicPath));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/api/user', userRouter);
app.use('/api/website', websiteRouter);
app.use('/api/page', pageRouter);
app.use('/api/element', elementRouter);
app.use('/api', userProfileRouter);
app.use('/api', publishRouter);

app.get('/:websiteTitle/:pageTitle', (req, res) => {
    res.sendFile(path.join(userPublicPath, 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

module.exports = app;

