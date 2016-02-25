/**
 * @author maokei
 * @description Game server
 * */


var http = require('http');
var path = require('path');
var port = 7777;

//serv up client
var server = http.createServer(function(req, res) {
    console.log('we got request');
    res.writeHead(200, {'Content-type':'text/html'});
    res.write("<p>Battlebox test</p>");
    res.end();
});

server.listen(port, function() {
    console.log("BattleBox server is live at port: " + port);
});
