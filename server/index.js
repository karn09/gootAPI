var path = require('path');
var express = require('express');
var app = express();

var root = path.join(__dirname, '/');
var readmeFile = path.join(root, '../readme.md');

module.exports = app;

app.use('/api', require('./routes'));

app.get('/', function (req, res) {
    res.sendFile(readmeFile);
});

app.use(function (err, req, res, next) {
    console.error(err)
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});
