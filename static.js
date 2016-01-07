var s = require("underscore.string"); //underscore string library
var fs = require('fs');




module.exports = {

	custom: function(request, response){

		if(s.endsWith(request.url, ".css") == true)
		{
			var separator = '.css'
			var array = request.url.split(separator);
			var file_path = array[0];
			console.log(file_path);
			fs.readFile( '.' + file_path + separator + '', 'utf8', function(errors, contents){
				response.writeHead(200, {'Content-Type': 'text/css'});
				response.write(contents);
				response.end();
			});
		}

		else if(s.endsWith(request.url, ".html") == true){
			var separator = '.html'
			var array = request.url.split(separator);
			var file_path = array[0];
			fs.readFile('./views/' + file_path + separator + '', 'utf8',function(errors,contents){
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.write(contents);
				response.end();
			});
		}
		else if(s.endsWith(request.url, ".jpg") == true){
			var separator = '.jpg'
			var array = request.url.split(separator);
			var file_path = array[0];
			fs.readFile('./images/' + file_path + separator + '', 'utf8',function(errors,contents){
				response.writeHead(200, {'Content-Type': 'image/jpg'});
				response.write(contents);
				response.end();
			});
		}
		else if(s.endsWith(request.url, ".png") == true){
			var separator = '.png'
			var array = request.url.split(separator);
			var file_path = array[0];
			fs.readFile('.' + file_path + separator + '', 'utf8',function(errors,contents){
				response.writeHead(200, {'Content-Type': 'image/png'});
				response.write(contents);
				response.end();
			});
		}
		else{
			response.end("File not found :(")
		}
	}
}
