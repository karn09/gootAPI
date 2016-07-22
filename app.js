'use strict';
var chalk = require('chalk');

var server = require('http').createServer();

var createApplication = function () {
    var app = require('./server');
    server.on('request', app);
};

var startServer = function () {

    var PORT = process.env.PORT || 1337;

    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};
new Promise(createApplication).then(new Promise(startServer)).catch(function(err) {
  console.error(chalk.red(err.stack));
  process.kill(1);
})
