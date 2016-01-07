var http = require('http');
var fs = require('fs');
var s = require("underscore.string");
var static_contents = require("./static");

server = http.createServer(function(request, response){
	static_contents.custom(request, response);
});

server.listen(6789);
console.log("didit");