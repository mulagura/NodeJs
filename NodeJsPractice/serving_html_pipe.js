var fs = require("fs");
var http = require("http");


http.createServer(function(req,res)
{
	res.writeHead(200,{'content-type':'text/html'});    /*serve html*/

	var readStream = fs.createReadStream("pipe.html","");  /*readStream html file*/

	readStream.pipe(res);       

}).listen(1234);

console.log(" Hey It's Live on localhost:1234");