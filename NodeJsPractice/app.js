var http = require("http");

http.createServer(function(req,res)
{
	res.writeHead(200,{"content-type":"text/plain"});
	res.end("Hello Ram");
}).listen(1234);

