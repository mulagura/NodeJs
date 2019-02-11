var net = require("net");

var server = net.createServer(function(socket){

	socket.end("Hello welcome to TCP");
})

server.listen(1234,function()
	{
		console.log("server started !!!!");
	});