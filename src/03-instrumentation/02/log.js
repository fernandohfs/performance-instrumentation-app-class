const bunyan = require('bunyan');

const pkg = require('./package.json');

const log = bunyan.createLogger({name: pkg.name});

module.exports = log;