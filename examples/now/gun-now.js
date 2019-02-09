var Gun = require('../../'); // require('gun')

/*
var server = require('http').createServer(function(req, res){
    if (Gun.serve(req, res)){ return }
});

Gun({ file: '/tmp/db/data.json', web: server.listen(), radisk: false, localStorage: true });*/

var server = require('http').createServer().listen();

Gun({ file: '/tmp/db/data.json', web: server, radisk: false, localStorage: true });