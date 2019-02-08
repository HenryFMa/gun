var Gun = require('../'); // require('gun')

var server = require('http').createServer(Gun.serve(__dirname));

Gun({web: server.listen() });