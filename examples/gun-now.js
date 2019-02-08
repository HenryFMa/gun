var Gun = require('../'); // require('gun')

var server = require('http').createServer(Gun.serve(__dirname));

Gun({ file: '/tmp/db/data.json', web: server.listen(), radisk: false, localStorage: true });