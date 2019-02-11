var http = require("http");

var server = http.createServer(function(req,res)
{
	res.writeHead(200,{"content-type":"text/plain"});
	res.end("Welcome to NOde Js: in web browser");
});

server.listen(1234,function(){
	console.log("server stared: open http://localhost:1234 in browser");
});