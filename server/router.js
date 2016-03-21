/**
 * @author Rickard Johansson - maokei
 * @description Handles access routes
 * */

//imports
var render = require('./render.js');

var header = {'Content-Type':'text/html'};

//handle route for home/index GET and POST
function home(req, res) {
    if(req.url === '/') {
        if(req.method.toLowerCase()  === "get") {
            res.writeHead(200, header);
            render.view("header", {}, res);
			render.view("content", {}, res);
            render.view("footer", {}, res);
            res.end();
        }else{ // / and post
            req.on("data", function(postBody){
                console.log("God post reuqest");
            });
        }
    }
}

//expose
module.exports.home = home;
