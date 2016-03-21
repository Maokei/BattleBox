/**
 * @author Rickard Johansson - maokei
 * @description 
 * */


var http = require('http');
var router = require('./router.js');
var port = process.env.PORT | 7777;

//serv up client
var server = http.createServer(function(req, res) {
    router.home(req, res);
});

server.listen(port, function() {
    console.log("BattleBox server is live at port: " + port);
});
