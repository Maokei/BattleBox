/**
 * @author Rickard Johansson - maokei
 * @description
 * */

var fs = require("fs");

function merge(values, content) {
    for(var key in values) {
        content = content.replace("{{" + key + "}}", values[key]);
    }
    //return merged content
    return content;
}

function view(template, values, res) {
    //read view file
    var file = fs.readFileSync('./views/' + template + '.html', {encoding: "utf-8"});
    //insert content 
    file = merge(values, file);
    //write view content to response
    res.write(file);
}

module.exports.view = view;
