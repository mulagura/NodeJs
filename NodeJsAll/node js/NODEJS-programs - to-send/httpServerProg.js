var http=require('http');
var server=http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end("hello world\n");
});


server.listen(9999,'localhost');

console.log("HTTP Server Started at http://localhost:9999/");


//http.createServer(function (req, res) {
//res.writeHead(200, { 'Content-Type': 'text/plain' });
//res.end('Hello World\n');
//}).listen(1337, "127.0.0.1");
//console.log('Server running at http://127.0.0.1:1337/');
